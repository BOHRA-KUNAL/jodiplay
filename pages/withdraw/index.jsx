import ApiClient from "@/api/apiClient";
import Loader from "@/components/Loader";
import Inputbox from "@/components/common/Inputbox";
import { getSetData } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProfileUpdateConfirmation from "@/pages/ProfileUpdateConfirmation";
import ConditionalDownloadButton from "../ConditionalDownloadButton";
import Swal from "sweetalert2";

const Withdraw = () => {
  const router = useRouter();
  const checkUserToken = !!getSetData("token");

  const [active, setActive] = useState(0);
  const [paymentData, setpaymentData] = useState({});
  const [walletDetails, setWalletDetails] = useState({});
  const [loading, setloading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setamount] = useState("");
  const [withdrawHistory, setwithdrawHistory] = useState([]);
  const [getwithdrawTime, setwithdrawTime] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const { user_id } = getSetData("userData", false, true);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };


  const methodCodes = {
    1: "bank account",
    2: "paytm number",
    3: "Google pay number",
    4: "phonePe Number",
    5: "UPI ID",
  };

  let paymentKeys = {
    "bank account": "ac_number",
    "paytm number": "paytm_number",
    "Google pay number": "google_pay_number",
    "phonePe Number": "phone_pay_number",
    "UPI ID": "upi_id",
  };

  useEffect(() => {
    if (user_id) {
      fetchBalance();
      fetchwithdrawTransactionHistory();
      getPaymentDetails();
    }
  }, [user_id]);

  useEffect(() => {
    if (!checkUserToken) {
      router.push("/signup");
    }
  }, []);

  let reset = () => {
    setPaymentMethod("");
    setamount("");
  };

  const userWithdrawFundRequest = () => {
    if (!amount || isNaN(amount)) {
      return alert("Please enter a valid amount");
    }

    if (!paymentMethod) {
      return alert("Please enter a valid payment Method");
    }

    if (+walletDetails?.min_withdrawal > +amount) {
      // return alert(`min withdrawal ${walletDetails?.min_withdrawal}`);
      Swal.fire({
        title: "Oops!",
        text: `Minimum withdrawal ${walletDetails?.min_withdrawal}₹`,
        icon: "error"
      });
      return;
    }

    let payload = {
      user_id,
      request_amount: amount,
      payment_method: paymentMethod,
    };

    setloading(true);
    ApiClient.userWithdrawFundRequest(payload)
      .then((res) => {
        setloading(false);
        fetchBalance();
        reset();
        toast.success(res?.data?.msg || "");
      })
      .catch((err) => {
        setloading(false);
        toast.error("Something went wrong");
        console.log(err);
      });
  };

  const getPaymentDetails = () => {
    setloading(true);
    ApiClient.userPaymentDetails({ user_id })
      .then((res) => {
        const paymentDetails = res?.data?.payment_details;
  
        // Check if paymentDetails exists and has content
        if (paymentDetails && paymentDetails.length > 0) {
          setpaymentData(paymentDetails[0]);
          handleCloseModal(); // Ensure this is a function call
        } else {
          handleShowModal(); // Ensure this is a function call
        }
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  };

  const fetchwithdrawTransactionHistory = () => {
    setloading(true);
    ApiClient.withdrawTransactionHistory({ user_id })
      .then((res) => {
        setloading(false);
        setwithdrawHistory(res.data.withdrawdata || []);
        setwithdrawTime(res.data || []);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  };

  const fetchBalance = () => {
    setloading(true);
    ApiClient.wallet_amount({ user_id })
      .then((res) => {
        setloading(false);
        setWalletDetails(res?.data || {});
      })
      .catch((error) => {
        setloading(false);
        console.error("Error fetching wallet amount:", error);
      });
  };

  const renderTypes = () => {
    let activeClass = (item) => {
      if (active == item) {
        return "btn-secondary";
      }
      return "";
    };

    return (
      <div className="d-flex justify-content-around my-3 gap-3">
        <div className={`border p-2 w-100 text-center pointer btn ${activeClass(0)}`} onClick={() => setActive(0)}>
          Withdrawal
        </div>
        <div className={`border p-2 w-100 text-center pointer btn ${activeClass(1)}`} onClick={() => setActive(1)}>
          History
        </div>
      </div>
    );
  };

  const withdraw = () => {
    return (
      <div>
        {/* {showUpdateModal()} */}
        <div className="border p-4 d-flex flex-column gap-3 text-center mx-auto px-5 btn-outline-success">
          <div className="heading">Available Amount</div>
          <div className="heading">{walletDetails?.wallet_amt}</div>
        </div>
        <div className="px-2 px-sm-4 d-sm-flex gap-3 justify-content-around align-items-center pt-1">
          <div className="my-3 ">
            <b>Withdrawal Timing : </b> {getwithdrawTime?.withdraw_open_time} - {getwithdrawTime?.withdraw_close_time}
          </div>
          <div className="my-3 bold">
            <b>Minimum Withdrawal : {walletDetails?.min_withdrawal} </b>
          </div>
        </div>
  
        <div className="my-3">
          <Inputbox placeholder="Enter Withdrawal amount" onChange={setamount} value={amount} />
        </div>
  
        <div className="d-sm-flex align-items-center gap-3">
          <div className="bold my-2">Choose Withdrawal Method :</div>
          {paymentData?.google_pay_number && (
            <div className="d-flex gap-1 bold my-2">
              <input
                type="radio"
                name="paymentMethod"
                value="3"
                checked={paymentMethod == "3"}
                onChange={() => setPaymentMethod("3")}
              />
              Google Pay
            </div>
          )}
          {paymentData?.phone_pay_number && (
            <div className="d-flex gap-1 bold my-2">
              <input
                type="radio"
                name="paymentMethod"
                value="4"
                checked={paymentMethod == "4"}
                onChange={() => setPaymentMethod("4")}
              />
              Phone Pay
            </div>
          )}
          {paymentData?.paytm_number && (
            <div className="d-flex gap-1 bold my-2">
              <input
                type="radio"
                name="paymentMethod"
                value="2"
                checked={paymentMethod == "2"}
                onChange={() => setPaymentMethod("2")}
              />
              Paytm
            </div>
          )}
          {paymentData?.upi_id && (
            <div className="d-flex gap-1 bold my-2">
              <input
                type="radio"
                name="paymentMethod"
                value="5"
                checked={paymentMethod == "5"}
                onChange={() => setPaymentMethod("5")}
              />
              UPI
            </div>
          )}
          {paymentData?.ac_number && (
            <div className="d-flex gap-1 bold my-2">
              <input
                type="radio"
                name="paymentMethod"
                value="1"
                checked={paymentMethod == "1"}
                onChange={() => setPaymentMethod("1")}
              />
              Bank
            </div>
          )}
        </div>
  
        <div className="d-flex align-items-center justify-content-center mt-3">
          <div
            onClick={userWithdrawFundRequest}
            className="py-2 bg-primary text-white bold px-4 py-3 rounded heading pointer"
          >
            Withdraw
          </div>
        </div>
      </div>
    );
  };
  
  const history = () => {
    return withdrawHistory.map((item, index) => {
      let statusClass = "text-info";
      let statusText = "Pending";
      if (item.request_status == 2) {
        statusText = "Approved";
        statusClass = "text-success";
      } else if (item.request_status == 1) {
        statusText = "Rejected";
        statusClass = "text-danger";
      }

      return (
        <div className="border p-3 mb-3" key={index}>
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="bold mb-2">{item.insert_date}</div>
            <div className="mb-2">- {item.request_amount}</div>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div>
              {methodCodes[item?.payment_method]} {item[paymentKeys[methodCodes[item?.payment_method]]]}
            </div>
            <div className={statusClass}> {statusText}</div>
          </div>
        </div>
      );
    });
  };

  const renderValues = {
    0: withdraw,
    1: history,
  };

  return (
    <div className="maxWidth px-3 px-sm-4">
      <ConditionalDownloadButton/>
      <div className="card">
        {/* Existing components and logic */}
        {renderTypes()}
        {renderValues[active]()}
      </div>

      {/* Render the modal */}
      <ProfileUpdateConfirmation 
        isVisible={modalVisible} 
        onClose={handleCloseModal} 
      />

      <Loader show={loading} />
    </div>
  );
};

export default Withdraw;
