import React, { useEffect, useState } from "react";
import Link from "next/link";
import { addMoneyIcon, downloadappfooter, homeIcon, playGreen, whatsappIcon, withdrawlicon } from "@/resources/images";
import { setContactDetails, setHeaderTitle } from "@/redux/slice";
import { useDispatch } from "react-redux";
import { getSetData } from "@/utils";

import DownloadIcon from "@mui/icons-material/Download";
import ApiClient from "@/api/apiClient";

const Footer = () => {
  const dispatch = useDispatch();

  const [contactDetails, setContactDetailsData] = useState({});

  const handleClick = (elm, title = "JODI PLAY") => {
    dispatch(setHeaderTitle(title));
  };

  useEffect(() => {
    getContactData();
  }, []);

  const getContactData = () => {
    ApiClient.getContactDetails()
      .then((res) => {
        if (res?.data?.data && res?.data?.data[0]) {
          let data = res?.data?.data[0];
          dispatch(setContactDetails(data));
          setContactDetailsData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let isLoggedIn = !!getSetData("token");

  // let basicDetails = getSetData("basicDetails", false, true);

  return (
    <div style={{ paddingTop: "80px" }}>
      {isLoggedIn ? (
        <div id="footer-bar">
          <Link onClick={handleClick} href="/" className="active-nav">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img src={homeIcon} alt="Jodi Play home icon" />
              <span className="footerTabs">Home</span>
            </div>
          </Link>
          <Link onClick={handleClick} href={`${contactDetails?.whatsapp_no}`} target="_blank">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img src={whatsappIcon} alt="Jodi Play whatsappIcon icon" />
              <span className="footerTabs whatsappcolor">Whats App</span>
            </div>
          </Link>
          {/* <Link onClick={handleClick} href={"https://backend.jodiplay.com/logo/Jodi_Play.apk"}>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img style={{ background: 'none', backgroundColor: 'transparent', backgroundImage: 'none' }} src={'/download.jpeg'} alt="Jodi Play Download App" />
              <span style={{backgroundColor: 'red'}}className="footerTabs">Download Now</span>
            </div>
          </Link> */}
          <Link onClick={handleClick} href={"/add-fund"}>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img src={addMoneyIcon} alt="Jodi Play addMoneyIcon icon" />
              <span className="footerTabs darkorangeColor">Add Point</span>
            </div>
          </Link>
          <Link onClick={() => handleClick("", "GALI")} href={"/galidesawar"}>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <img src={playGreen} alt="Jodi Play playGreen icon" />
              <span className="footerTabs greenColor">Gali Desawar</span>
            </div>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Footer;
