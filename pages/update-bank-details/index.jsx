import ApiClient from "@/api/apiClient";
import { getSetData } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BankDetails = () => {
  const [formData, setFormData] = useState({
    account_holder_name: "",
    account_number: "",
    ifsc: "",
    bank_name: "",
  });
  const router = useRouter();

  // const router =useRouter();
  useEffect(() => {
    const checkUserToken = getSetData("token");

    if (!checkUserToken) {
      router.push("/signup");
    }
  }, []);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { user_id } = getSetData("userData", false, true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Call your API to update bank details
    ApiClient.updateBankDetails({
      user_id,
      bank_name: formData.bank_name,
      branch_address: "",
      ac_holder_name: formData.account_holder_name,
      ac_number: formData.account_number,
      ifsc_code: formData.ifsc,
    })
      .then((res) => {
        // Handle success response
        if (!res.data.status) {
          toast.error(res.data.msg);
        } else {
          toast.success(res.data.msg);
          setFormData({ account_holder_name: "", account_number: "", ifsc: "", bank_name: "" });
        }
      })
      .catch((error) => {
        // Handle error response
        console.error("Error updating bank details:", error);
        toast.error("Failed to update bank details");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="card tb-10">
        <div className="text-center tb-10">
          <h3>Bank Details</h3>
          <span>Provide Valid Bank Details</span>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="account_holder_name">A/c Holder Name:</label>
            <input
              type="text"
              className="form-control"
              name="account_holder_name"
              value={formData.account_holder_name}
              onChange={handleInputChange}
              maxLength={50}
              minLength={4}
              placeholder="Beneficiary name"
              id="account_holder_name"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="account_number">Bank Account Number:</label>
            <input
              type="text"
              className="form-control"
              name="account_number"
              value={formData.account_number}
              onChange={handleInputChange}
              maxLength={25}
              minLength={4}
              placeholder="950000124587"
              id="account_number"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ifsc">IFSC Code:</label>
            <input
              type="text"
              className="form-control"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleInputChange}
              maxLength={11}
              minLength={11}
              placeholder="HDFC0000139"
              id="ifsc"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bank_name">Bank Name:</label>
            <input
              type="text"
              className="form-control"
              name="bank_name"
              value={formData.bank_name}
              onChange={handleInputChange}
              maxLength={25}
              minLength={3}
              placeholder="HDFC/SBI/Bank of india"
              id="bank_name"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn btn-theme btn-login" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <div className="text-center tbmar-20">
          <p>Unable to update?</p>
          <a href="https://wa.me/91" className="btn btn-outline btn-login">
            Contact Admin
          </a>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
