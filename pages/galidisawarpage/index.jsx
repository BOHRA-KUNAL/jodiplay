import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function GaliDisawarSattaMatka() {
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
        <title>Play Gali & Delhi Disawar Satta Matka | Online on JodiPlay</title>
        <meta name="description" content="Play Gali and Disawar Satta Matka online on JodiPlay. Enjoy instant withdrawals. Check the panel chart and guess winning jodi's with live updates and fast results!" />
        <meta name="keywords" content="gali matka, satta matka gali chart, matka gali disawar, satta matka gali result, gali disawar satta matka, delhi gali satta matka, gali chart, gali disawar, matka satta gali result, gali disawar matka game, gali disawar fast result, online gali disawar satta, gali disawar final number, satta matka jodi chart, jodi play gali disawar, satta matka online, matka gali bazar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jodiplay.com/gali-disawar-satta-matka" />
      </Head>

      <header>
        <h1>Welcome to Gali & Disawar</h1>
      </header>

      <section className="banner">
        <Image
          src={'/gali.jpg'}
          alt="Gali Disawar Panel Chart By Jodiplay"
          layout="fill"
          objectFit="cover"
        />
      </section>
      <h1 style={{textAlign: 'center', margin: '20px auto'}}>Gali & Disawar Satta Matka: Play Online on JodiPlay</h1>

      <main>
        <section className="content">
          <h2>A Satta Matka Game to Play</h2>
          <p>
            Welcome to JodiPlay! Today, we will talk about two exciting Satta Matka games: Gali and Disawar. These games are popular among players who love to guess numbers and win big. You can play these games online through our website or our <a href="https://backend.jodiplay.com/logo/Jodi_Play.apk">app</a>. For more games, check out <Link href="https://jodiplay.com/karnataka-day">Karnataka Day</Link> and <Link href="https://jodiplay.com/madhur-morning">Madhur Morning</Link>.
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

          <h2>What is Satta Matka?</h2>
          <p>
            Satta Matka is a game where players guess numbers. These numbers are called jodi's. In Satta Matka, you try to guess the right jodi to win. You can find results every day. The game is fun and easy to learn!
          </p>

          <h2>Gali Satta Matka</h2>
          <p>
            Gali Satta Matka is one of the most popular versions. It is played in many places, including Delhi. In this game, players look at a panel chart to see past results. This chart helps players guess which numbers will come up next.
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

          <h3>How to Play Gali Satta Matka</h3>
          <ul>
            <li>
              <strong>Check the Panel:</strong> Look at the panel chart. It shows the results of previous games. You can see which jodi's were winners.
            </li>
            <li>
              <strong>Make Your Guess:</strong> After checking the panel, think about your guesses. Choose your jodi based on what you see.
            </li>
            <li>
              <strong>Play Online:</strong> You can play Gali Satta Matka online on our website or app. It is easy and quick!
            </li>
            <li>
              <strong>Check Your Result:</strong> After the game, check the results. Did you win? You can see the fast result on our website.
            </li>
          </ul>

          <h3>Tips to Win Gali Satta Matka</h3>
          <ul>
            <li>Look for Patterns: Sometimes, numbers repeat. Keep an eye on the past results in the panel chart.</li>
            <li>Play Smart: Do not bet all your money at once. Play wisely and have fun!</li>
          </ul>

          <h2>Disawar Satta Matka</h2>
          <p>
            Disawar Satta Matka is another exciting game. Like Gali, you guess jodi's to win. The games are similar, but each has its own rules.
          </p>

          <h3>How to Play Disawar Satta Matka</h3>
          <ul>
            <li>
              <strong>Check the Gali Chart:</strong> Even though it is Disawar, sometimes players look at the Gali chart for tips.
            </li>
            <li>
              <strong>Choose Your Numbers:</strong> Make your guesses based on your favorite jodi's.
            </li>
            <li>
              <strong>Play Live:</strong> Play Disawar online with our live game option. You can see everything happening in real time.
            </li>
            <li>
              <strong>Check the Final Result:</strong> After the game, check the final result. Winners are announced quickly!
            </li>
          </ul>

          <h2>Why Choose JodiPlay?</h2>
          <p>
            At JodiPlay, we make it easy for you to play both Gali and Disawar Satta Matka games. Our website and app are user-friendly. You can enjoy these games anytime, anywhere. Don't forget to <a href="https://jodiplay.com/signup">sign up</a> to start playing! Explore other games like <Link href="https://jodiplay.com/main-bazaar">Main Bazaar</Link> and <Link href="https://jodiplay.com/time-bazaar">Time Bazaar</Link> for more fun!
          </p>

          <h3>Features of JodiPlay</h3>
          <ul>
            <li>Easy to Use: Our platform is designed for everyone, even if you are new to Satta Matka.</li>
            <li>Live Results: Get fast results. You don't have to wait long to see if you won.</li>
            <li>Fun and Exciting: Playing Gali and Disawar is a fun way to pass the time and maybe win some money!</li>
          </ul>

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

          <h2>Join the Fun!</h2>
          <p>
            Now that you know about Gali and Disawar Satta Matka, it's time to play! Join us at JodiPlay. You can play on your computer or download our app. Let's guess some jodi's and see if you can win big!
          </p>
          <p>
            Don't miss out on the excitement! Check our website for the latest results, tips, and more. Happy playing!
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