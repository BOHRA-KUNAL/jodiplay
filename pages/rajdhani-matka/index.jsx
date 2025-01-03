// pages/rajdhani-matka/index.jsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RajdhaniMatka() {
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
        <title>Play Rajdhani Matka Online on JodiPlay | Fast Result & Big Wins</title>
        <meta name="description" content="Play Rajdhani Matka online on JodiPlay! Enjoy fast results, easy gameplay, and 24/7 fun. Check panel charts, live results, and win big with your lucky numbers." />
        <meta name="keywords" content="Rajdhani Matka, JodiPlay, Satta Matka, Rajdhani Matka result, Rajdhani Matka online, Rajdhani Matka game, fast Matka result, panel chart, live Matka, open Matka, close Matka, matka app, matka guessing, matka night chart, matka day chart, win Rajdhani Matka, fix number, satta bazar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jodiplay.com/rajdhani-matka" />
      </Head>

      <header>
        <h1>Welcome to Rajdhani Matka</h1>
      </header>

      <section className="banner">
        <Image
          src={'/rajdhani.jpg'}
          alt="Rajdhani Satta Matka Game Banner By Jodiplay"
          layout="fill"
        />
      </section>
      <h1 style={{textAlign: 'center', margin: '20px auto'}}>Play Rajdhani Matka Online on JodiPlay: Fast Results, Big Wins</h1>

      <main>
        <section className="content">
          <h2>Rajdhani Matka: A Fun Game for Everyone</h2>
          <p>
            Rajdhani Matka is one of the most popular satta matka games. It's easy to play and lots of fun. People love to play it online every day. You can check out more games like <Link href="https://jodiplay.com/kalyan-matka">Kalyan Matka</Link>, <Link href="https://jodiplay.com/milan-morning">Milan Morning</Link>, and <Link href="https://jodiplay.com/rudraksh-morning">Rudraksh Morning</Link> on <a href="https://jodiplay.com/">JodiPlay</a>.
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

          <h2>How to Play Rajdhani Matka</h2>
          <p>
            To play Rajdhani Matka, you choose a number or a jodi (pair of numbers). You can check the open and close times to see when the game starts and ends. There's also a panel chart and a night chart to help you guess the numbers.
          </p>

          <h3>Here's how you play:</h3>
          <ul>
            <li>Pick your numbers.</li>
            <li>Watch the live result.</li>
            <li>If your numbers match, you win!</li>
          </ul>
          <p>
            The game is fast, and results come quickly. You can play during the day or night, depending on what works best for you.
          </p>

          <h2>Other Matka Games You Can Play</h2>
          <p>
            Rajdhani Matka is just one of many satta matka games. You can also play:
          </p>
          <ul>
            <li>Kalyan Matka</li>
            <li>Milan Matka</li>
            <li>Karnataka Day</li>
          </ul>
          <p>
            All these games work the same way. You pick numbers, and if you guess right, you win! The fun part is that each game has different times and charts to check, like the day chart and night chart.
          </p>

          <h2>Check the Panel Chart</h2>
          <p>
            Before playing, many people like to check the Rajdhani Matka panel chart. This chart shows past results. You can see which numbers have won before. It helps with guessing new numbers. Some people even use a fix jodi or a final fix number.
          </p>
          <p>
            The panel chart is easy to read, and you can see the results from past games. It's a good idea to look at the record book too. This will show you the results from many games in the past.
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
              Let's Play
            </button>
          </div>

          <h2>Playing Online</h2>
          <p>
            Now, you can play Rajdhani Matka and other matka games online on <a href="https://jodiplay.com/">JodiPlay</a>. It's fast and fun! All you need is a phone or computer. You can even <a href="https://backend.jodiplay.com/logo/Jodi_Play.apk">download the app</a> to play. The app makes it super easy to check the fast results, choose your numbers, and see the live results. Don't forget to check out <Link href="https://jodiplay.com/time-bazaar">Time Bazaar</Link> for more excitement!
          </p>
          <p>
            The best part? You can play anytime you want! The games are open 24/7, so there's always a game to join. The bazar is never closed!
          </p>

          <h2>How to Win</h2>
          <p>
            Winning is all about guessing the right numbers. Some people use guessing charts or look at the final number. Others just trust their luck. Whether you play for fun or want to win big, it's always exciting to watch the results.
          </p>
          <p>
            Remember, the game is about fun. Even if you don't win, there's always another round!
          </p>

          <h2>Why Play Rajdhani Matka?</h2>
          <h3>Here's why Rajdhani Matka is a great game:</h3>
          <ul>
            <li>It's easy to learn.</li>
            <li>The game is fast, and results are quick.</li>
            <li>You can play day or night.</li>
            <li>You can check the panel chart to help with guessing.</li>
            <li>It's fun to play with friends or alone.</li>
            <li>It's available online and on the app.</li>
          </ul>

          <h2>Check Your Results</h2>
          <p>
            Once you've played, you can check the matka result quickly. The fast result shows who won right after the game closes. You don't have to wait long! You can check the open and close times for each game to know when results will come in.
          </p>
          <p>
            Whether it's a day chart or night chart, all results are easy to find online.
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
              Download Mobile App
            </button>
          </div>

          <h2>Get Started Today!</h2>
          <p>
            Rajdhani Matka and other satta matka games are waiting for you. You can start playing right now! Pick your numbers, check the panel, and get ready to win. The more you play, the more fun you'll have! Don't forget to <a href="https://jodiplay.com/signup">sign up</a> for an account to get started!
          </p>
          <p>
            It's always exciting to see the final result. So, why wait? Start playing Rajdhani Matka and enjoy the thrill of the game!
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