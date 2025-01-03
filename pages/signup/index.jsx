import ApiClient from "@/api/apiClient";
import Inputbox from "@/components/common/Inputbox";
import { handleChange } from "@/components/helpers/change";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Signup() {
  const router = useRouter();
  const [allData, setAllData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const checkUserToken = typeof window !== 'undefined' && localStorage.getItem('token');
    
    if (checkUserToken) {
      router.push('/');
    }
  }, [])

  const handleSubmit = async () => {
    let errors = {};

    if (!allData.name) errors.name = "Name is required";
    if (!allData.mobile) errors.mobile = "Mobile number is required";
    if (!allData.password) errors.password = "Password is required";

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    const payload = {
      app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8",
      name: allData.name,
      email: "user@gmail.com",
      mobile: allData.mobile,
      password: allData.password,
      security_pin: "12234",
      betting_status: 1,
    };

    try {
      const checkMobileResponse = await ApiClient.CheckMobile({
        mobile: allData.mobile,
        app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8"
      });

      if (checkMobileResponse.data.status === true) {
        const signUpResponse = await ApiClient.userSignUp(payload);

        if (signUpResponse.data.status === true) {
          const sendotp = await ApiClient.sendotp({mobile: signUpResponse.data.mobile, app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8"});
          if(sendotp.data.status === true) {
            toast.success(sendotp.data.msg);
            router.push(`/verify-otp?userId=${sendotp.data.user_id}`);
          } else {
            toast.error(sendotp.data.msg);
          }
        } else {
          toast.error(signUpResponse.data.msg || 'Sign-up failed');
        }
      } else {
        toast.error(checkMobileResponse.data.msg || 'Mobile number not registered');
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || error?.message || 'An error occurred during sign-up');
    }
  };

  return (
    <div>
      <div className="d-flex w-100 h-100 align-items-center justify-content-center">
        <div className="customCard p-3 w-100 m-3 mw700 my-4">
          <div className="text-center">
            <h3 className="mt-3">Sign Up</h3>
            <div className="font-12 mb-3">Create Your Account</div>
          </div>
          <div>
            <Inputbox
              onChange={(val) => handleChange("name", val, allData, setAllData, errors)}
              value={allData.name}
              error={errors.name}
              className="mb-3"
              label="Your Name:"
              placeholder="Enter Full Name"
            />
            <Inputbox
              onChange={(val) => handleChange("mobile", val, allData, setAllData, errors)}
              value={allData.mobile}
              error={errors.mobile}
              className="mb-3"
              type="number"
              label="Mobile Number:"
              placeholder="Enter 10 Digit Phone Number"
            />
            <Inputbox
              onChange={(val) => handleChange("password", val, allData, setAllData, errors)}
              error={errors.password}
              value={allData.password}
              className="mb-3"
              label="Password:"
              placeholder="Enter password"
              type="password"
            />
            <button 
              onClick={handleSubmit} 
              className="btn btn-theme form-control mt-3"
            >
              Sign Up
            </button>
            <div className="my-3 text-center">Already have an account?</div>
            <button
              onClick={() => router.push("/login")}
              className="btn btn-outline-theme form-control colorful-button text-white"
            >
              Login Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;