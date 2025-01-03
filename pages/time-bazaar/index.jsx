// pages/time-bazaar/index.jsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function TimeBazaar() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const scrollToTop = () => {
    router.push("/");
  };

  const DownloadApplication = () => {
    router.push("https://backend.jodiplay.com/logo/Jodi_Play.apk");
  }

  return (
    <div>
      <Head>
        <title>Play Time Bazaar Satta Matka Online | Fast Results & Live Updates</title>
        <meta name="description" content="Get fast results and live updates for Time Bazaar. Play multiple Satta Matka games online anytime and increase your chances to win big. Click now to play!" />
        <meta name="keywords" content="Time Bazaar, Morning Time Bazaar, Time Bazaar Night Chart, Time Bazaar Second, Time Bazaar Nikal, Time Bazaar Guessing, Time Bazaar Total Chart, Time Bazaar Panel Chart, Satta Matka, Jodiplay, Play Online, Live, Record, Book, Bazaar, Online Satta Matka App Download, Betting, Gaming" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jodiplay.com/time-bazaar" />
      </Head>

      <header>
        <h1>Welcome to Time Bazaar</h1>
      </header>

      <section className="banner">
        <Image
          src={'/timebazaar.jpg'} // replace with actual image URL
          alt="time bazaar panel chart"
          layout="fill"
          objectFit="cover"
        />
      </section>
      <h1 style={{textAlign: 'center', margin: '20px auto'}}>Time Bazaar: Play Online Satta Matka on JodiPlay</h1>

      <main>
        <section className="content">
          <h2>What is Time Bazaar?</h2>
          <p>
            Time Bazaar is an exciting <strong>Satta Matka</strong> game where players select numbers, anticipate results, and win prizes. It's simple to play and thrilling, especially when you participate online on <a href="https://jodiplay.com/">JodiPlay</a>. Whether you're a novice or an experienced player, Time Bazaar offers a great opportunity to enjoy and win. You can also check out <a href="https://jodiplay.com/main-bazaar">Main Bazaar</a> and <a href="https://jodiplay.com/kalyan-matka">Kalyan Matka</a> for more fun!
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

          <h2>How to Play Time Bazaar on JodiPlay</h2>
          <p>Playing Time Bazaar on JodiPlay is straightforward. Here's how it works:</p>
          <ol>
            <li>Select Your Numbers: Choose your preferred numbers or a Jodi.</li>
            <li>Open and Close Times: Time Bazaar has specific open and close times. Ensure you place your bet before the game closes.</li>
            <li>Consult the Panel Chart: Use the panel chart to assist with guessing. It displays past results, which can help you select winning numbers.</li>
            <li>Check the Results: Once the game concludes, view the live result on JodiPlay. If your numbers match, you win!</li>
          </ol>

          <h2>Morning and Night Play</h2>
          <p>Time Bazaar offers both morning and night charts. This means you can play during the day or wait for the night to test your luck. Regardless of when you play, the game always brings excitement and the chance to win big.</p>
            
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
              Lets Play
            </button>
          </div>

          <h2>Utilizing the Panel Chart and Guessing</h2>
          <p>Guessing is a crucial aspect of Satta Matka. Many players use the panel chart to aid their guesses. The chart displays previous winning numbers, making it easier to choose the right ones.</p>

          <h2>Quick Results and Easy Wins</h2>
          <p>One of the best features of playing Time Bazaar on JodiPlay is the quick results. You don't have to wait long to see if you've won. The results are posted promptly, allowing you to play more games without delay.</p>

          <h2>Play Online Anytime with JodiPlay</h2>
          <p>With JodiPlay, you can enjoy Time Bazaar and other popular games like <a href="https://jodiplay.com/kalyan-matka">Kalyan Matka</a>, <a href="https://jodiplay.com/rajdhani-matka">Rajdhani Matka</a>, and <a href="https://jodiplay.com/galidisawar">Gali Disawar</a> whenever you want. Don't forget to <a href="https://jodiplay.com/signup">sign up</a> to start playing!</p>

          <h2>Why Play Time Bazaar?</h2>
          <p>Time Bazaar is an entertaining game that's easy to learn. You can play it anytime, and with JodiPlay's quick results and online platform, it's more convenient than ever to enjoy the game.</p>
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
          <p>Time Bazaar offers endless entertainment and the opportunity to win big. Download the JodiPlay app or visit the website to start playing today. Whether you're checking the morning chart or the night chart, there's always a game ready for you on JodiPlay.</p>
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
      </a>

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
        ol, ul {
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