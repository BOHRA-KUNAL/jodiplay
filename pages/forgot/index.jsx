import ApiClient from "@/api/apiClient";
import Inputbox from "@/components/common/Inputbox";
import { handleChange } from "@/components/helpers/change";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Forgot() {
  const router = useRouter();
  const [allData, setAllData] = useState({});
  const [errors, setErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [userId, setUserId] = useState("");

  const handleSubmit = async () => {
    let errors = {};

    if (!allData.mobile) {
      errors.mobile = "Mobile number is required";
    }

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    try {
      const checkMobileResponse = await ApiClient.CheckMobile({
        mobile: allData.mobile,
        app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8"
      });

      if (checkMobileResponse.data.status === false) {
          const sendotp = await ApiClient.sendotp({mobile: allData.mobile, app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8"});
          if(sendotp.data.status === true) {
            // console.log(sendotp.data.user_id);
            setUserId(sendotp.data.user_id);
            toast.success(sendotp.data.msg);
            setIsOtpSent(true);
          } else {
            toast.error(sendotp.data.msg);
          }
      } else {
        toast.error(checkMobileResponse.data.msg || 'Mobile number not registered');
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || error?.message || 'An error occurred while sending OTP');
    }
  };

  const handleVerifyOTP = async () => {
    if (!allData.otp) {
      toast.error("OTP is required");
      return;
    }

    if (!allData.password) {
      toast.error("New Password is required");
      return;
    }

    try {
      const verifyOTPResponse = await ApiClient.VerifyOTPForgot({
        user_id: userId,
        otp: allData.otp,
        app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8"
      });

      if (verifyOTPResponse.data.msg === 'Otp Successfully Matched.') {
        const forgotpassword = await ApiClient.ForgotPassword({ mobile: allData.mobile, new_pass: allData.password});
        if (forgotpassword.data.status === true) {
          toast.success(forgotpassword.data.msg);
          router.push("/login");
        } else {
          toast.error(forgotpassword.data.msg);
        }
      } else {
        toast.error(verifyOTPResponse.data.msg || 'OTP verification failed');
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || error?.message || 'An error occurred during OTP verification');
    }
  };

  return (
    <div>
      <div className="d-flex w-100 h-100 align-items-center justify-content-center">
        <div className="customCard p-3 w-100 m-3 mw700 my-4">
          <div onClick={router.back}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>

          </div>
          <div className="text-center">
            <h3 className="mt-3">Forgot Password</h3>
            <div className="font-12 mb-3">Forgot your details</div>
          </div>
          <div>
          <Inputbox
              onChange={(val) => handleChange("mobile", val, allData, setAllData, errors)}
              value={allData.mobile}
              error={errors.mobile}
              className="mb-3"
              type="number"
              label="Mobile Number:"
              placeholder="Enter 10 Digit Phone Number"
            />
            {isOtpSent && (
              <Inputbox
                onChange={(val) => handleChange("otp", val, allData, setAllData, errors)}
                error={errors.otp}
                value={allData.otp}
                className="mb-3"
                label="OTP:"
                placeholder="Enter OTP"
              />
            )}
            {isOtpSent && (
              <Inputbox
                onChange={(val) => handleChange("password", val, allData, setAllData, errors)}
                error={errors.password}
                value={allData.password}
                className="mb-3"
                label="New Password:"
                placeholder="Enter New password"
                type="password"
              />
            )}
            <button
              onClick={isOtpSent ? handleVerifyOTP : handleSubmit}
              className="btn btn-theme form-control mt-3"
            >
              {isOtpSent ? "Verify OTP" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
