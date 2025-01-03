import ApiClient from "@/api/apiClient";
import React, { useEffect, useState } from "react";

function Howtoplay() {
  const [playData, setHowToPlay] = useState({});

  useEffect(() => {
    howtoplayData();
  }, []);

  const howtoplayData = () => {
    ApiClient.howToPlay()
      .then((res) => {
        setHowToPlay(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-2 p-sm-4 maxWidth my-3 d-flex">
      <div className="m-auto px-1">
        <div className="w-100 mb-3">
          <img src={playData?.image_file} style={{ width: "100%" }} layout="responsive" alt="bg image" />
          {/* <iframe
            style={{ minWidth: "320px", width: "100%" }}
            height="315"
            src=
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: playData?.how_to_play_content || "" }} />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a href={playData?.video_link}>
              <button style={{ background: '#FF0000' }} className="btn btn-theme btn-login">
                Watch Video
              </button>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Howtoplay;
