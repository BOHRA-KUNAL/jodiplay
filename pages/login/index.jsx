import ApiClient from "@/api/apiClient";
import Loader from "@/components/Loader";
import Inputbox from "@/components/common/Inputbox";
import { handleChange } from "@/components/helpers/change";
import { getSetData } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from 'react-redux';
import { setUserId } from '@/redux/slice';

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const forgotclick = () => {
    router.push('/forgot');
  };

  const handleSubmit = () => {
    let errors = {};

    if (!allData.mobile) {
      errors.mobile = "Mobile number is required";
    }
    if (!allData.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    let payload = {
      mobile: allData.mobile,
      password: allData.password,
    };

    setLoading(true);

    ApiClient.userLogin(payload)
      .then((response) => {
        setLoading(false);
        getSetData("token", response.data.token);
        getSetData("userData", response?.data, true);
        dispatch(setUserId(response.data.user_id)); 
        toast.success("Login Successfully");

        // window.location = "";
        router.push('/?welcomesound=true');
      })
      .catch((error) => {
        toast.error("Invalid Details");
        setLoading(false);
      });
  };

  return (
    <div className="d-flex w-100 h-100 align-items-center justify-content-center">
      <div className="customCard mw700 p-3 w-100 m-3 mt-3 mb-4">
          <div onClick={router.back}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>

          </div>
        <div className="text-center">
          <img src={"/logo.png"} style={{ maxWidth: "50%", objectFit: "contain" }} alt="logo" />
          <h3 className="mt-1">Welcome Back</h3>
          <div className="font-13 mb-3">Login to Continue</div>
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
          <div className="position-relative mb-3">
            <Inputbox
              onChange={(val) => handleChange("password", val, allData, setAllData, errors)}
              value={allData.password}
              error={errors.password}
              label="Password:"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
            />
            <div
              className="position-absolute top-50 end-0 me-2 mt-2 translate-middle-y pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </div>
          </div>
          <button onClick={handleSubmit} className="btn btn-theme form-control mt-3">
            Login
          </button>
          <div
            className="my-3 text-center"
            onClick={forgotclick}
          >
            Forgot Password
          </div>
          <div className="my-3 text-center"> Don't have an account?</div>
          <button onClick={() => router.push("/signup")} className="colorful-button">
            Create New Account
          </button>
        </div>
      </div>
      <Loader show={loading} />
    </div>
  );
}

export default Login;
