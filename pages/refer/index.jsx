import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function ReferFriend() {
  let url = "";

  if (process.browser) {
    url = window.location.href;
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        alert("url copied to clipboard");
      },
      (err) => {
        alert("Failed to copy!");
        console.error("Copy failed", err);
      }
    );
  };
  return (
    <div className="d-flex align-items-center justify-content-center m-3">
      <div className="card">
        <div className="d-flex justify-content-between gap-3 align-items-center">
          <div>{url}</div>
          <ContentCopyIcon onClick={handleCopyClick} />
        </div>
      </div>
    </div>
  );
}

export default ReferFriend;
