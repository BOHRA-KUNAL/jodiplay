import ApiClient from "@/api/apiClient";
import { getSetData } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConditionalDownloadButton from "../ConditionalDownloadButton";
const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const router = useRouter();

  useEffect(() => {
    const checkUserToken = getSetData("token");

    if (!checkUserToken) {
      router.push("/login");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { user_id } = getSetData("userData", false, true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.new_password !== formData.confirm_new_password) {
      toast.error("New password and confirm password do not match");
      return;
    }

    setLoading(true);

    ApiClient.passwordChange({ old_password: formData.old_password, new_pass: formData.new_password, user_id })
      .then((res) => {
        setInfo(res?.data);
        if (!res.data.status) {
          toast.error(res.data.msg);
        } else {
          toast.success(res.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error changing password:", error);
        toast.error("Failed to Change");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <ConditionalDownloadButton/>
      <div className="card tb-10">
        <div className="text-center tb-10">
          <h3>Change Password</h3>
          <span>Update Your Profile Password</span>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="old_password">Old Password:</label>
            <input
              type="password"
              className="form-control"
              name="old_password"
              value={formData.old_password}
              onChange={handleInputChange}
              minLength={3}
              maxLength={50}
              placeholder="Existing Password"
              id="old_password"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new_password">New Password:</label>
            <input
              type="password"
              className="form-control"
              name="new_password"
              value={formData.new_password}
              onChange={handleInputChange}
              minLength={3}
              maxLength={50}
              placeholder="Enter New Password"
              id="new_password"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_new_password">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              name="confirm_new_password"
              value={formData.confirm_new_password}
              onChange={handleInputChange}
              minLength={3}
              maxLength={50}
              placeholder="Confirm Password"
              id="confirm_new_password"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn btn-theme btn-login" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
