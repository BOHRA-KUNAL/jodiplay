import { whatsappIcon } from "@/resources/images";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";
import { useSelector } from "react-redux";

function Support() {
  const reduxData = useSelector((state) => state?.data);
  const { contact_details } = reduxData;

  return (
    <div className="container my-3 d-flex gap-3 align-items-center justify-content-around flex-wrap">
      <a target="_blank" href={contact_details?.contact_details} className="m-2 p-2 px-3 border d-block">
        <div className="d-flex align-items-center gap-2">
          <img src={whatsappIcon} style={{ width: "30px" }} />
          <span>Whatsapp</span>
        </div>
      </a>

      <a target="_blank" href={"tel://" + contact_details?.mobile_1} className="m-2 p-2 px-3 border d-block">
        <div className="d-flex align-items-center gap-2">
          <LocalPhoneIcon style={{ width: "30px", color: "green" }} />
          <span>call</span>
        </div>
      </a>

      <a target="_blank" href={contact_details?.email_1} className="m-2 p-2 px-3 border d-block">
        <div className="d-flex align-items-center gap-2">
          <EmailIcon style={{ width: "30px", color: "red" }} />
          <span>Email</span>
        </div>
      </a>
      <a target="_blank" href={contact_details?.youtube} className="m-2 p-2 px-3 border d-block">
        <div className="d-flex align-items-center gap-2">
          <YouTubeIcon style={{ width: "30px", color: "red" }} />
          <span>Youtube</span>
        </div>
      </a>
    </div>
  );
}

export default Support;
