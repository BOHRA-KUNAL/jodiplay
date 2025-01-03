// pages/milan-morning.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MilanMorning() {

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
        <title>Milan Morning Online Satta Matka Game | Play Now</title>
        <meta name="description" content="Play Milan Morning on JodiPlay! Enjoy fast results, live updates, and easy betting on Satta Matka. Check charts, play online, and win big today!" />
        <meta name="keywords" content="Milan Morning, Milan Morning Satta Matka, Milan Morning Result, Milan Morning Chart, Milan Morning Game, Milan Morning Panel, Milan Morning Guessing, Milan Morning Jodi, Milan Morning Final, Milan Morning Fix, Milan Morning Open, Milan Morning Close, Milan Morning Fast Result, Milan Morning Bazar, Milan Morning Betting, Milan Morning Online, Milan Morning Play, Milan Morning Win, Milan Morning Live, Milan Morning Record, Milan Morning App" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JodiPlay" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <h1>Welcome to JodiPlay</h1>
      </header>

      <section className="banner">
        <Image
          src="https://tradebrains.in/features/wp-content/uploads/2022/02/Online-Casinos-in-India-Cover-Image-1080x675.jpg" // Change this to the correct path
          alt="Milan Morning Panel Chart"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <main>
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
        <h1 style={{textAlign: 'center', margin: '20px auto'}}>Milan Morning: How to Play and Win Big on JodiPlay</h1>
        <section className="content">
          <h1>What is Milan Morning?</h1>
          <p>
            Milan Morning is a fun <strong>Satta Matka</strong> game. Players pick numbers and place bets in hopes of matching the winning combination in the daily final result. The game has fast results, and you can bet on either the open or close panel for a chance to win.
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

          <h2>How to Play Milan Morning</h2>
          <ol>
            <li>
              <strong>Choose Your Numbers:</strong> Pick numbers from 0-9. You can bet on a single number, a Jodi (two numbers), or a Patti (three numbers).
            </li>
            <li>
              <strong>Place Your Bet:</strong> After choosing your numbers, place your bet. You can choose to bet on the open panel, close panel, or both.
            </li>
            <li>
              <strong>Check the Results:</strong> The final result is revealed after the draw. If your numbers match the winning ones, you win the game! The results are fast, so you can find out if you’ve won right away.
            </li>
          </ol>

          <h2>Milan Morning Results</h2>
          <p>
            Results for Milan Morning are announced multiple times throughout the day. With <a href="https://jodiplay.com" className="link">JodiPlay</a>, you get live updates so you don’t miss out. You can also check the chart to review previous game results and spot any trends. This can help you guess the next numbers and plan your bets.
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

          <h2>Tips for Playing Milan Morning</h2>
          <p>
            While Satta Matka is mostly about luck, there are ways to improve your chances:
          </p>
          <ul>
            <li>Study the Chart: Look at the record of past results and see if there are any patterns. This can help you with guessing the next final number.</li>
            <li>Mix Your Bets: Spread your bets between single numbers and Jodis to increase your chances of winning.</li>
            <li>Follow Expert Guessing Tips: Use the tips provided by JodiPlay to make smarter guesses.</li>
            <li>Bet Smart: Only bet what you can afford to lose. Always play with a budget.</li>
          </ul>

          <h2>Why Play Milan Morning on JodiPlay?</h2>
          <p>
            There are several reasons why <a href="https://jodiplay.com" className="link">JodiPlay</a> is the best place to play Milan Morning:
          </p>
          <ul>
            <li>Fast Results: Get quick results without waiting too long.</li>
            <li>Easy to Use: The platform works well on desktops, phones, tablets, and through the <a href="https://backend.jodiplay.com/logo/Jodi_Play.apk" className="link">JodiPlay app</a>, so you can play online from anywhere.</li>
            <li>Multiple Markets: Besides Milan Morning, you can also play other Satta Matka games like Gali, Desawar, and more.</li>
            <li>Safe and Secure: JodiPlay ensures your information is protected while you enjoy the game.</li>
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

          <h2>Start Playing Milan Morning Today</h2>
          <p>
            Whether you're a beginner or an experienced player, JodiPlay makes it easy to enjoy Milan Morning. With fast results, a helpful chart, and expert tips, you can improve your chances of winning. Try your luck today and see if you can win big in the Milan Morning game!
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
        .related-games {
        background-color: #ffe4e1;
        padding: 15px;
        margin-top: 20px;
        border-radius: 8px;
        }
        footer {
        text-align: center;
        padding: 20px;
        background-color: #333;
        color: white;
        bottom: 0;
        width: 100%;
        }
        a {
        color: #b22222;
        text-decoration: none;
        }
        a:hover {
        text-decoration: underline;
        }
        `}
        </style>
    </div>
  );
}
