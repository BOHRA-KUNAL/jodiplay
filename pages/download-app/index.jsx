import { ImageApp } from "@/resources/images";
import { getSetData } from "@/utils";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const DownloadApp = () => {
  let basicDetails = getSetData("basicDetails", false, true);
  let { app_link = "" } = basicDetails;

  if (!app_link.includes("http")) {
    app_link = `https://${app_link}`;
  }

  return (
    <div className="container">
      <div className="tb-10">
        <div className="row">
          <div className="col-12">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={ImageApp} style={{ width: 150, height: "auto", marginRight: 20 }} />
              <div>
                <p style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>DOWNLOAD OUR APP</p>
                <p>Elevate your experience and stay effortlessly connected with our mobile app.</p>
                <a
                  href={app_link}
                  style={{
                    backgroundColor: "#b73800",
                    color: "white",
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <FileDownloadIcon className="text-white" /> Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
