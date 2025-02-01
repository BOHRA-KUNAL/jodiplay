import ApiClient from "@/api/apiClient";
import Inputbox from "@/components/common/Inputbox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Head from "next/head";

const blog = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const scrollToTop = () => {
    router.push("/");
  };
  // console.log(router.query);
  const { blogurl } = router.query;
  const [allBlogs, setAllBlogs] = useState();

  console.log("allBlogs===>>", allBlogs);
  const [allData, setAllData] = useState({});
  const [errors, setErrors] = useState({});

  const DownloadApplication = () => {
    router.push("https://backend.jodiplay.com/logo/Jodi_Play.apk");
  };

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
        app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8",
      });

      if (checkMobileResponse.data.status === true) {
        const signUpResponse = await ApiClient.userSignUp(payload);

        if (signUpResponse.data.status === true) {
          const sendotp = await ApiClient.sendotp({
            mobile: signUpResponse.data.mobile,
            app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8",
          });
          if (sendotp.data.status === true) {
            toast.success(sendotp.data.msg);
            router.push(`/verify-otp?userId=${sendotp.data.user_id}`);
          } else {
            toast.error(sendotp.data.msg);
          }
        } else {
          toast.error(signUpResponse.data.msg || "Sign-up failed");
        }
      } else {
        toast.error(
          checkMobileResponse.data.msg || "Mobile number not registered"
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.msg ||
          error?.message ||
          "An error occurred during sign-up"
      );
    }
  };

  const fetChImages = () => {
    ApiClient.getBlogDetails({
      app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8",
      blog_url: blogurl,
    })
      .then((res) => {
        // console.log("response---", res);
        setAllBlogs(res?.data?.result[0]);
        // if (res?.data?.status && Array.isArray(res.data.sliderdata)) {
        //     setSliderImages(res.data.sliderdata);
        // } else {
        //     console.error("Invalid slider data format:", res.data);
        // }
      })
      .catch((err) => {
        console.error("Error fetching slider images:", err);
      });
  };

  useEffect(() => {
    if (blogurl) {
      fetChImages();
    }
  }, [blogurl]);

  return (
    <div>
      <Head>
        <title>{allBlogs?.meta_title}</title>

        <meta name="description" content={allBlogs?.meta_description} />
      </Head>

      <div>
        <img
          src={allBlogs?.blog_img}
          alt={allBlogs?.img_alt_text}
          className="w-full"
          style={{
            height: "270px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="container">
        <div className="d-flex flex-wrap m-2 position-relative">
          <div className="col-xs-12 col-md-8" style={{ paddingBottom: "4rem" }}>
            <div>
              <p
                className="blogs_para"
                dangerouslySetInnerHTML={{ __html: allBlogs?.blog_desc }}
              ></p>
            </div>
          </div>
          <div
            style={{ paddingBottom: "5rem" }}
            className="col-sm-12  col-md-4 "
          >
            <div className="position-sticky top-0">
              <div className="customCard p-3 w-100 m-3 mw700 my-4 ">
                <div className="text-center">
                  <h3 className="mt-3">Sign Up</h3>
                  <div className="font-12 mb-3">Create Your Account</div>
                </div>
                <div>
                  <Inputbox
                    onChange={(val) =>
                      handleChange("name", val, allData, setAllData, errors)
                    }
                    value={allData.name}
                    error={errors.name}
                    className="mb-3"
                    label="Your Name:"
                    placeholder="Enter Full Name"
                  />
                  <Inputbox
                    onChange={(val) =>
                      handleChange("mobile", val, allData, setAllData, errors)
                    }
                    value={allData.mobile}
                    error={errors.mobile}
                    className="mb-3"
                    type="number"
                    label="Mobile Number:"
                    placeholder="Enter 10 Digit Phone Number"
                  />
                  <Inputbox
                    onChange={(val) =>
                      handleChange("password", val, allData, setAllData, errors)
                    }
                    error={errors.password}
                    value={allData.password}
                    className="mb-3"
                    label="Password:"
                    placeholder="Enter password"
                    type="password"
                  />
                  {/* <button
                    onClick={handleSubmit}
                    className="btn btn-theme form-control mt-3"
                  >
                    Sign Up
                  </button> */}
                  <a
                    className="cushycms"
                    id="RefreshButton"
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: "#000080",
                      color: "white",
                      border: "1px solid black",
                      borderRadius: "8px",
                      padding: "10px 15px",
                      fontWeight: 700,
                      fontSize: "16px",
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 0px 5px #000000d6",
                    }}
                  >
                    Sign Up
                  </a>
                </div>

                {/* start */}
                <a
                  className="cushycms"
                  id="RefreshButton"
                  style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "10px",
                    left: "10px",
                    backgroundColor: "#000080",
                    color: "white",
                    border: "1px solid black",
                    borderRadius: "8px",
                    padding: "10px 15px",
                    fontWeight: 700,
                    fontSize: "16px",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 0px 5px #000000d6",
                  }}
                  onClick={DownloadApplication}
                >
                  <FileDownloadIcon style={{ marginRight: "5px" }} />
                  Download Mobile App
                </a>
                {/* end */}

                {isVisible && (
                  <button onClick={scrollToTop} className="back-to-top">
                    Go To Home
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pfooter {
          color: #fff;
        }

        header {
          background-color: navy; /* Navy blue theme */
          color: white;
          text-align: center;
          padding: 1em 0;
        }
        .banner {
          position: relative;
          text-align: center;
          height: 150px;
        }
        .banner h1 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 2.5em;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          z-index: 1;
        }
        .content {
          max-width: 800px;
          margin: 20px auto;
          background-color: #fff; /* White background for content */
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: navy; /* Navy blue for headings */
        }
        ol,
        ul {
          margin: 10px 0;
          padding-left: 20px;
        }
        .back-to-top {
          color: #fff;
          border: 1px inset #000;
          font-style: italic;
          font-size: 15px;
          border-radius: 8px;
          padding: 5px 10px;
          box-shadow: 0 0 5px #000000d6;
          position: fixed;
          left: 5px;
          background: #000080;
          font-weight: 700;
          bottom: 75px;
        }
      `}</style>
    </div>
  );
};

export default blog;
