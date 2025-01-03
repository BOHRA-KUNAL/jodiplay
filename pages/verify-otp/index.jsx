import ApiClient from "@/api/apiClient";
import Inputbox from "@/components/common/Inputbox";
import { handleChange } from "@/components/helpers/change";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getSetData } from "@/utils";

function VerifyOTP() {
  const router = useRouter();
  const [allData, setAllData] = useState({});
  const [errors, setErrors] = useState({});
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userIdParam = urlParams.get('userId');
    if (userIdParam) {
      setUserId(userIdParam);
    } else {
      router.push('/signup');
    }
  }, []);

  const handleVerifyOTP = async () => {
    if (!allData.otp) {
      setErrors({ otp: "OTP is required" });
      return;
    }

    try {
      const verifyOTPResponse = await ApiClient.VerifyOTP({
        user_id: userId,
        otp: allData.otp,
        app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8"
      });

      if (verifyOTPResponse.data.msg === 'Login successful.. Redirecting..') {
        toast.success("Registered successfully");
        getSetData("token", verifyOTPResponse.data.token);
        getSetData("userData", verifyOTPResponse?.data, true);
        router.push({
          pathname: '/',
          query: { welcomesound: 'true' },
        });
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
            <h3 className="mt-3">Verify OTP</h3>
            <div className="font-12 mb-3">Enter the OTP sent to your mobile</div>
          </div>
          <div>
            <Inputbox
              onChange={(val) => handleChange("otp", val, allData, setAllData, errors)}
              error={errors.otp}
              value={allData.otp}
              className="mb-3"
              label="OTP:"
              placeholder="Enter OTP"
            />
            <button 
              onClick={handleVerifyOTP} 
              className="btn btn-theme form-control mt-3"
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;