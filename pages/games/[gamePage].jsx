import ApiClient from "@/api/apiClient";
import Inputbox from "@/components/common/Inputbox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { usePathname } from "next/navigation";

const gamePage = () => {
  const [gameDetails, setGameDetails] = useState();
  // console.log("gameDetails---->>", gameDetails);

  
  const pathname = usePathname();
  const slug = pathname?.split('/').pop();
  console.log("pathname==",slug)


  const fetChGameDetails = () => {
    ApiClient.getGamePageDetails({
      app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8",
      title: slug,
    })
      .then((res) => {
        console.log("response---", res.data.result[0]);
        setGameDetails(res.data.result[0]);
        // setAllBlogs(res?.data?.result[0]);
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

  const DownloadApplication = () => {
    router.push("https://backend.jodiplay.com/logo/Jodi_Play.apk");
  };

  useEffect(() => {
    fetChGameDetails();
  }, [pathname]);
  return (
    <div>
      <div>
        {/* <div className="post_heading_main">
          <div className="post_heading">
            <h4 className="post_meta_category">ADVERTISING MARKETING AND PR</h4>

            <h1 className="entry_title">
            Main Bazar: Play Online Satta Matka on JodiPlay
            </h1>
          </div>
        </div> */}

        {/* <div className="post_img_main">
          <img
            src="https://www.bizbangboom.com/wp-content/uploads/2025/01/a-vibrant-and-creative-digital-marketing_Q4TVgiSIR6uR02Oi1n8RjQ_bY8NBqQuRxqIAXfZz_O5Xg-1024x508.png"
            alt=""
          />
        </div> */}

        <div className="post_img_main_content pt-5">
          {/* <h3>
          What is the Main Bazar?
          </h3> */}

          {gameDetails ? (
            <p
              dangerouslySetInnerHTML={{ __html: gameDetails?.description }}
            ></p>
          ) : (
            <p>Data not found</p>
          )}

          {/* <div className="d-flex justify-content-center my-4">
            <button
              style={{
                backgroundColor: "#000080",
                padding: "5px 10px",
                width: "30%",
                borderRadius: "8px",
                color: "#fff",
              }}
              onClick={DownloadApplication}
            >
              Play Online Matka
            </button>
          </div> */}

          {/* <h3>How to Play Main Bazar on JodiPlay</h3>
          <p>Playing Main Bazar on JodiPlay is easy. Here's how it works:</p>
          <ol>
            <li>Pick Your Numbers: Choose your favorite numbers or a Jodi.</li>
            <li>Open and Close Times: Main Bazar has open and close times. Make sure to place your bet before the game closes.</li>
            <li>Check the Panel Chart: Use the panel chart to help with guessing. It shows past results, which can help you pick winning numbers.</li>
            <li>Watch the Results: Once the game ends, check the live result on JodiPlay. If your numbers match, you win!</li>
          </ol>

          <h3>Day and Night Play</h3>
          <p>Main Bazar offers both day and night charts. This means you can play during the day or wait for the night to test your luck. No matter when you play, the game always brings fun and the chance to win big.</p>

          <h3>Using the Panel Chart and Guessing</h3>
          <p>Guessing is an important part of Satta Matka. Many players use the panel chart to help with their guesses. The chart shows previous winning numbers, making it easier to choose the right ones.</p> */}
        </div>
      </div>
    </div>
  );
};

export default gamePage;
