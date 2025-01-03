import ApiClient from "@/api/apiClient";
import Loader from "@/components/Loader";
import Inputbox from "@/components/common/Inputbox";
import { getSetData } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConditionalDownloadButton from "../ConditionalDownloadButton";

const PaymentMethods = () => {
  const router = useRouter();
  const checkUserToken = !!getSetData("token");

  const [active, setActive] = useState(0);
  const [loading, setloading] = useState(false);
  const [allData, setAllData] = useState({});

  const { user_id } = getSetData("userData", false, true);

  useEffect(() => {
    if (user_id) {
      getPaymentDetails();
    }
  }, [user_id]);

  const getPaymentDetails = () => {
    let payload = {
      user_id: user_id,
    };

    setloading(true);
    ApiClient.userPaymentDetails(payload)
      .then((res) => {
        if (res?.data?.payment_details) {
          let newData = structuredClone(res.data.payment_details[0]);
          newData.phon_pay_no = newData.phone_pay_number;
          newData.paytm_no = newData.paytm_number;
          newData.google_pay_no = newData.google_pay_number;
          newData.upi_type = newData.upi_id;

          setAllData(newData);
        }
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  };

  const saveUpiDetails = async () => {
    const upiTypes = [
      { key: 'paytm_no', type: 1, name: 'Paytm' },
      { key: 'google_pay_no', type: 2, name: 'Google Pay' },
      { key: 'phon_pay_no', type: 3, name: 'PhonePe' },
      { key: 'upi_type', type: 4, name: 'UPI' }
    ];

    setloading(true);

    for (const upi of upiTypes) {
      if (allData[upi.key]) {
        const payload = {
          user_id: user_id,
          upi_type: upi.type,
          paytm_no: upi.type === 1 ? allData[upi.key] : undefined,
          google_pay_no: upi.type === 2 ? allData[upi.key] : undefined,
          phon_pay_no: upi.type === 3 ? allData[upi.key] : undefined,
          upi_id: upi.type === 4 ? allData[upi.key] : undefined
        };

        try {
          const res = await ApiClient.addUserUpiDetails(payload);
          if (res.data && res.data.status) {
            toast.success(res.data.msg);
          } else {
            toast.error(res.data.msg || `Failed to save ${upi.name} details`);
          }
        } catch (err) {
          console.error(`Error saving ${upi.name} details:`, err);
          toast.error(`Failed to save ${upi.name} details. Please try again.`);
        }
      }
    }

    setloading(false);
    getPaymentDetails(); // Refresh the payment details after saving
  };

  const saveBankDetails = () => {
    if (allData.confirm_ac_number != allData.ac_number) {
      return toast.error("Account number and  confirm account number are not the same.");
    }

    let payload = {
      user_id: user_id,
      // ...allData,
      // upi_type: "",
      // paytm_no: "",
      // google_pay_no: "",
      // phon_pay_no: "",
    };

    setloading(true);
    ApiClient.addUserBankDetails(payload)
      .then((res) => {
        setloading(false);
        toast.success(res.data.msg);
      })
      .catch((err) => {
        setloading(false);
        toast.error("Something went wrong.");
        console.log(err);
      });
  };

  useEffect(() => {
    if (!checkUserToken) {
      router.push("/signup");
    }
  }, []);

  const renderTypes = () => {
    let activeClass = (item) => {
      if (active == item) {
        return "btn-secondary";
      }
      return "";
    };

    return (
      <div className="d-flex justify-content-around my-3 gap-3">
        <div
          className={`border p-2 w-100 text-center pointer btn ${activeClass(0)}`}
          onClick={() => {
            setActive(0);
          }}
        >
          UPI
        </div>
        <div
          className={`border p-2 w-100 text-center pointer btn ${activeClass(1)}`}
          onClick={() => {
            setActive(1);
          }}
        >
          BANK
        </div>
      </div>
    );
  };

  const upi = () => {
    const handleChange = (val, key) => {
      setAllData({ ...allData, [key]: val });
    };

    return (
      <div className="maxwidth">
        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "upi_type")}
            value={allData.upi_type}
            placeholder="Enter UPI ID"
            label="UPI ID"
          />
        </div>

        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "phon_pay_no")}
            value={allData.phon_pay_no}
            placeholder="Enter PhonePe Number"
            label="PhonePe Number"
          />
        </div>

        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "google_pay_no")}
            value={allData.google_pay_no}
            placeholder="Enter Google Pay Number"
            label="Google Pay Number"
          />
        </div>
        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "paytm_no")}
            value={allData.paytm_no}
            placeholder="Enter Paytm Number"
            label="Paytm Number"
          />
        </div>
        <div className="d-flex">
          <div onClick={saveUpiDetails} className="btn btn-primary bg-primary mx-auto px-4">
            Save
          </div>
        </div>
      </div>
    );
  };

  const bank = () => {
    const handleChange = (val, key) => {
      allData[key] = val;
      setAllData({ ...allData });
    };

    return (
      <div className="maxwidth">
        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "ac_holder_name")}
            value={allData.ac_holder_name}
            placeholder="Enter Account Holder Name"
            label="Account Holder Name"
          />
        </div>

        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "bank_name")}
            value={allData.bank_name}
            placeholder="Enter Bank Name"
            label="Bank Name"
          />
        </div>

        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "ac_number")}
            value={allData.ac_number}
            placeholder="Enter Account Number"
            type="number"
            label="Account Number"
          />
        </div>

        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "confirm_ac_number")}
            value={allData.confirm_ac_number}
            placeholder="Enter Account Number"
            type="number"
            label="Confirm Account Number"
          />
        </div>

        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "ifsc_code")}
            value={allData.ifsc_code}
            placeholder="Enter IFSC Code"
            label="IFSC Code"
          />
        </div>

        <div className="my-3">
          <Inputbox
            onChange={(val) => handleChange(val, "branch_address")}
            value={allData.branch_address}
            placeholder="Enter Branch Address"
            label="Branch Address"
          />
        </div>

        <div className="d-flex">
          <div onClick={saveBankDetails} className="btn btn-primary bg-primary mx-auto px-4">
            Save
          </div>
        </div>
      </div>
    );
  };

  const renderValues = {
    0: upi,
    1: bank,
  };

  return (
    <div className="maxWidth px-3 px-sm-4">
      <ConditionalDownloadButton/>
      <div className="card">
        {renderTypes()}
        {renderValues[active]()}
      </div>
      <Loader show={loading} />
    </div>
  );
};

export default PaymentMethods;
