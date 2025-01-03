// pages/rudraksh-morning.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useState } from 'react'
import { useRouter } from 'next/router'

export default function RudrakshMorning() {

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
        <title>Rudraksh Morning Online Satta Matka Game | Play Now</title>
        <meta name="description" content="Discover the thrill of Rudraksh Morning on Jodiplay, Join the Satta Matka game, win big, and enjoy non-stop excitement. Play smart, play today!" />
        <meta name="keywords" content="Rudraksh Morning, Satta Matka, Jodi, Chart, Guessing, Result, Panel, Online, Play, Fast Result, Close, Open, Fix, Final, Number, Game, Win, Live, Record, Book, Bazar, Satta Matka App, Day" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JodiPlay" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <h1>Welcome to JodiPlay</h1>
      </header>

      <section className="banner">
        <Image
          src="https://tradebrains.in/features/wp-content/uploads/2022/02/Online-Casinos-in-India-Cover-Image-1080x675.jpg" // Update with the correct path
          alt="rudraksh morning chart"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <main>
        <h1 style={{textAlign: 'center', margin: '20px auto'}}>Rudraksh Morning: How to Play and Win Big on JodiPlay</h1>
        <a
          className="cushycms"
          id="RefreshButton"
          style={{
            position: "fixed",
            bottom: "35px",
            right: "5px",
          }}
          onClick={DownloadApplication}
          >
          <input
            style={{
              backgroundColor: "#a9211e",
              color: "white",
              borderWidth: "1px",
              borderColor: "black",
              borderStyle: "inset",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "large",
              borderRadius: "8px",
              padding: "5px 10px",
              boxShadow: "0px 0px 5px #000000d6",
            }}
            type="button"
            value="Download App"
          />
        </a>

        

        <section className="content">
          <h1>What is Rudraksh Morning?</h1>
          <p>
            Rudraksh Morning is a fun <strong>Satta Matka</strong> game you can play every day on <a href="https://jodiplay.com" className="link">JodiPlay</a>. It's simple, fast, and gives you many chances to win big. In this blog, we'll explain how to play, check results, and share some tips to help you win!
          </p>

          <div className="d-flex justify-content-center my-4">
            <button
              style={{
                backgroundColor: "#a9211e",
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

          <h2>How to Play Rudraksh Morning</h2>
          <ol>
            <li>
              <strong>Pick Your Numbers:</strong> Choose numbers between 0-9. You can pick one number, a Jodi (two numbers), or a Patti (three numbers).
            </li>
            <li>
              <strong>Place Your Bet:</strong> Decide if you want to bet on the open panel or the closed panel. You can choose both if you like!
            </li>
            <li>
              <strong>Wait for Results:</strong> The game’s final result is drawn, and if your numbers match, you win the game. The best part? <a href="https://jodiplay.com" className="link">JodiPlay</a> gives fast results, so you don't have to wait long.
            </li>
          </ol>

          <h2>Rudraksh Morning Results</h2>
          <p>
            Checking the results on <a href="https://jodiplay.com" className="link">JodiPlay</a> is easy. The platform gives live updates, so you always know when the numbers are drawn. You can check the open and close results quickly. Plus, you can see the chart for the Rudraksh Morning game to view past records and help plan your next bet.
          </p>

          <div className="d-flex justify-content-center my-4">
            <button
              style={{
                backgroundColor: "#a9211e",
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

          <h2>Tips for Playing Rudraksh Morning</h2>
          <ul>
            <li>Study the Chart: Look at the past result charts to find patterns. This can help you guess the next number.</li>
            <li>Spread Your Bets: Don’t bet only on one type of bet. Play both single numbers and Jodis for a better chance.</li>
            <li>Use Expert Guessing Tips: <a href="https://jodiplay.com" className="link">JodiPlay</a> provides expert tips and guessing advice to help you improve your chances of winning.</li>
            <li>Stay Within Your Budget: Only bet what you can afford to lose. Always play smart and safe.</li>
          </ul>

          

          <h2>Why Play Rudraksh Morning on JodiPlay?</h2>
          <ul>
            <li>Fast Results: Get live results without waiting long.</li>
            <li>Easy to Use: The platform is simple and can be used on any device – phone, tablet, or computer.</li>
            <li>Play Anywhere: Use the <a href="https://backend.jodiplay.com/logo/Jodi_Play.apk" className="link">JodiPlay app</a> to play online from anywhere.</li>
            <li>Multiple Markets: You can enjoy not just Rudraksh Morning, but other bazar games like Gali, Desawar, and more.</li>
            <li>Secure and Reliable: Your information is safe with <a href="https://jodiplay.com" className="link">JodiPlay</a>. The platform is trustworthy and offers a smooth experience for all players.</li>
          </ul>

          <div className="d-flex justify-content-center my-4">
            <button
              style={{
                backgroundColor: "#a9211e",
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

          <h2>Play Rudraksh Morning and Win</h2>
          <p>
            <a href="https://jodiplay.com" className="link">JodiPlay</a> makes it easy to play Satta Matka games like Rudraksh Morning. You can see fast results, check past charts, and get expert tips. Whether you’re new or experienced, you’ll love playing on this platform. Ready to play? Try your luck today on <a href="https://jodiplay.com" className="link">JodiPlay</a> and see if you can win big in the Rudraksh Morning game!
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

      <style jsx>{`
        .pfooter {
          color: #fff;
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
          background: #b22222;
          font-weight: 700;
          bottom: 75px;
        }

        .back-to-top:hover {
          background-color: #8b0000;
        }

        header {
          background-color: #b22222;
          color: white;
          text-align: center;
          padding: 1em 0;
        }

        .banner {
          position: relative;
          text-align: center;
          height: 300px;
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
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2,
        h3 {
          color: #b22222;
        }

        ul {
          margin: 10px 0;
          padding-left: 20px;
        }

        footer {
          text-align: center;
          padding: 20px;
          background-color: #b22222;
          color: white;
        }

        .link {
          color: #b22222;
          font-weight: 700;
          text-decoration: underline;
        }

        .link:hover {
          color: #8b0000;
        }
      `}</style>
    </div>
  );
}
