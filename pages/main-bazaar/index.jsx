// pages/main-bazar.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function MainBazar() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const scrollToTop = () => {
    router.push("/");
  };

  const DownloadApplication = () => {
    router.push("https://backend.jodiplay.com/logo/Jodi_Play.apk");
  };

  return (
    <div>
      <Head>
        <title>Play Main Bazar Satta Matka Online | Free Registration</title>
        <meta
          name="description"
          content="Get fast results and live updates for Main Bazar. Play multiple Satta Matka games online anytime and increase your chances to win big. Click now to play!"
        />
        <meta
          name="keywords"
          content="Main Bazar, Morning Time Bazar, Time Bazar Night Chart, Time Bazar Second, Time Bazar Nikal, Time Bazar Guessing, Time Bazar Total Chart, Time Bazar Panel Chart, Satta Matka, Jodiplay, Play Online, Live, Record, Book, Bazar, Online Satta Matka App Download, Betting, Gaming"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jodiplay.com/main-bazar" />
      </Head>

      {/* <header>
        <h1>Welcome to Main Bazar</h1>
      </header> */}

      {/* <section className="banner">
        <Image
          src={'/mainbazaar.jpg'} // replace with actual image URL
          alt="main bazar panel chart"
          layout="fill"
          objectFit="cover"
        />
      </section>
      <h1 style={{textAlign: 'center', margin: '20px auto'}}>Main Bazar: Play Online Satta Matka on JodiPlay</h1>

      <main>
        <section className="content">
          <h2>What is the Main Bazar?</h2>
          <p>
            Main Bazar is a thrilling and fun <strong>Satta Matka</strong> game where players pick numbers, watch results, and win prizes. It's easy to play and exciting, especially when you play online on <a href="https://jodiplay.com/">JodiPlay</a>. Whether you're new or experienced, Main Bazar offers a great chance to enjoy and win. You can also explore <a href="https://jodiplay.com/time-bazaar">Time Bazaar</a>, <a href="https://jodiplay.com/karnataka-day">Karnataka Day</a>, and <a href="https://jodiplay.com/madhur-morning">Madhur Morning</a> for more options!
          </p>

          <div className="d-flex justify-content-center my-4">
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
          </div>

          <h2>How to Play Main Bazar on JodiPlay</h2>
          <p>Playing Main Bazar on JodiPlay is easy. Here's how it works:</p>
          <ol>
            <li>Pick Your Numbers: Choose your favorite numbers or a Jodi.</li>
            <li>Open and Close Times: Main Bazar has open and close times. Make sure to place your bet before the game closes.</li>
            <li>Check the Panel Chart: Use the panel chart to help with guessing. It shows past results, which can help you pick winning numbers.</li>
            <li>Watch the Results: Once the game ends, check the live result on JodiPlay. If your numbers match, you win!</li>
          </ol>

          <h2>Day and Night Play</h2>
          <p>Main Bazar offers both day and night charts. This means you can play during the day or wait for the night to test your luck. No matter when you play, the game always brings fun and the chance to win big.</p>

          <h2>Using the Panel Chart and Guessing</h2>
          <p>Guessing is an important part of Satta Matka. Many players use the panel chart to help with their guesses. The chart shows previous winning numbers, making it easier to choose the right ones.</p>
          
          <div className="d-flex justify-content-center my-4">
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
              Let's Play
            </button>
          </div>
          <h2>Fast Results and Easy Wins</h2>
          <p>One of the best things about playing Main Bazar on JodiPlay is the fast results. You don't have to wait long to see if you've won. The results are posted quickly, so you can play more games without delay.</p>

          <h2>Play Online Anytime with JodiPlay</h2>
          <p>With JodiPlay, you can play Main Bazar and other popular games like Kalyan Matka and Rajdhani Matka anytime you want.</p>

          <h2>Why Play Main Bazar?</h2>
          <p>Main Bazar is a fun game that's easy to learn. You can play it anytime, and with JodiPlay's fast results and online platform, it's easier than ever to enjoy the game.</p>
            
          <div className="d-flex justify-content-center my-4">
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
              Download Mobile App
            </button>
          </div>

          <h2>Start Playing on JodiPlay Today!</h2>
          <p>
            Main Bazar offers endless fun and the chance to win big. Download the JodiPlay app or visit the website to start playing today. Whether you're checking the day chart or the night chart, there's always a game ready for you on JodiPlay. Don't forget to <a href="https://jodiplay.com/signup">sign up</a> to start playing!
          </p>
        </section>
      </main>

      <footer>
        <p className="pfooter">
          &copy; {new Date().getFullYear()} JodiPlay. All Rights Reserved.
        </p>
      </footer>

      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top">
          Go To Home
        </button>
      )}

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
      </a> */}

      {/* new code */}
      <div>
        <div className="post_heading_main">
          <div className="post_heading">
            <h4 className="post_meta_category">ADVERTISING MARKETING AND PR</h4>

            <h1 className="entry_title">
            Main Bazar: Play Online Satta Matka on JodiPlay
            </h1>
          </div>
        </div>

        <div className="post_img_main">
          <img
            src="https://www.bizbangboom.com/wp-content/uploads/2025/01/a-vibrant-and-creative-digital-marketing_Q4TVgiSIR6uR02Oi1n8RjQ_bY8NBqQuRxqIAXfZz_O5Xg-1024x508.png"
            alt=""
          />
        </div>

        <div className="post_img_main_content ">
          <h3>
          What is the Main Bazar?
          </h3>

          <p>
          Main Bazar is a thrilling and fun <strong>Satta Matka</strong> game where players pick numbers, watch results, and win prizes. It's easy to play and exciting, especially when you play online on <a href="https://jodiplay.com/">JodiPlay</a>. Whether you're new or experienced, Main Bazar offers a great chance to enjoy and win. You can also explore <a href="https://jodiplay.com/time-bazaar">Time Bazaar</a>, <a href="https://jodiplay.com/karnataka-day">Karnataka Day</a>, and <a href="https://jodiplay.com/madhur-morning">Madhur Morning</a> for more options!
          </p>


          <div className="d-flex justify-content-center my-4">
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
          </div>


          <h3>How to Play Main Bazar on JodiPlay</h3>
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
          <p>Guessing is an important part of Satta Matka. Many players use the panel chart to help with their guesses. The chart shows previous winning numbers, making it easier to choose the right ones.</p>
          
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
        footer {
          text-align: center;
          padding: 20px;
          background-color: navy; /* Navy blue for footer */
          color: white;
          position: relative;
          bottom: 0;
          width: 100%;
        }
        a {
          color: navy; /* Navy blue for links */
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .banner h1 {
            font-size: 1.8em;
          }
        }
      `}</style>
      <style jsx global>{`
        body {
          font-family: "Arial", sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9; /* Light background for overall page */
          color: #333;
        }
      `}</style>
    </div>
  );
}
