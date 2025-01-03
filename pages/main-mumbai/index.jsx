// pages/main-mumbai/index.jsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MainMumbaiSattaMatka() {
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
        <title>Play Main Mumbai Satta Matka Online on JodiPlay</title>
        <meta name="description" content="Main Mumbai Satta Matka is a classic satta matka game that people love to play. Check panel charts, live results, and win big with your lucky numbers." />
        <meta name="keywords" content="Main Mumbai Satta Matka, JodiPlay, Satta Matka, Main Mumbai Matka result, Main Mumbai Matka online, Mumbai Worli Matka, Main Mumbai Satta Matka game, panel chart, live result, fix jodi, matka result, online matka, fast matka result, satta bazar, JodiPlay app, play matka online, matka guessing, matka open, matka close, final number" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jodiplay.com/main-mumbai-satta-matka" />
      </Head>

      <header>
        <h1>Welcome to Main Mumbai</h1>
      </header>

      <section className="banner">
        <Image
          src={'/mainmumbai.jpg'} // replace with actual image URL
          alt="Main Mumbai Satta Matka"
          layout="fill"
          objectFit="cover"
        />
      </section>
      <h1 style={{textAlign: 'center', margin: '20px auto'}}>Play Main Mumbai Satta Matka Online on JodiPlay: Win Big with Fast Results</h1>

      <main>
        <section className="content">
          <h2>How to Play Main Mumbai Satta Matka</h2>
          <p>
            To play Main Mumbai Satta Matka, you need to choose a number or a jodi (pair of numbers). There are open and close times that tell you when the game starts and ends. You can also check the panel chart to help you with guessing. For more games, visit <a href="https://jodiplay.com/rajdhani-matka">Rajdhani Matka</a>, <a href="https://jodiplay.com/kalyan-matka">Kalyan Matka</a>, or <a href="https://jodiplay.com/rudraksh-morning">Rudraksh Morning</a>.
          </p>

          <h3>Here's how you play:</h3>
          <ul>
            <li>Pick your numbers.</li>
            <li>Watch the live result.</li>
            <li>If your numbers match, you win!</li>
          </ul>
          <p>
            The game moves quickly, and results come fast. You can play in the day or at night, so it fits any schedule. You can easily check the results on the JodiPlay website or through the JodiPlay app, making it super convenient.
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

          <h2>Main Mumbai Matka: Traditional Fun with a Modern Twist</h2>
          <p>
            Main Mumbai Matka offers a traditional gaming experience with a modern twist. It's played with a classic set of rules and has a loyal following among players who prefer a more traditional approach to Satta Matka. It's simple, but it offers lots of excitement!
          </p>

          <h2>Mumbai Worli Matka: A Unique Game</h2>
          <p>
            If you want something different, you can try Mumbai Worli Matka. This game is known for its unique betting patterns and frequent draws. It's easy to play and offers quick chances to win! Many players love it because of how fast the results come and the fun betting style.
          </p>

          <h2>Check the Panel Chart for Help</h2>
          <p>
            Many players use the panel chart to help with guessing. This chart shows the results of past games, so you can see which numbers have won before. Some players also check the record book for more detailed information. It's always a good idea to look at these charts to make better guesses.
            You can also try using a fix jodi or a final fix number for extra help. But remember, the game is all about luck!
          </p>

          <h2>Play Online Anytime</h2>
          <p>
            Now, you can play Main Mumbai Satta Matka and other games online. It's easy to play from your phone or computer. You can even use the <a href="https://backend.jodiplay.com/logo/Jodi_Play.apk">JodiPlay app</a> to check results and play faster. Don't forget to <a href="https://jodiplay.com/signup">sign up</a> for an account! Check out <Link href="https://jodiplay.com/galidisawar">Gali Disawar</Link> for more options!
          </p>
          <p>
            With online play, you can enjoy the game 24/7. The bazar never closes, and you can always find a game to join. Plus, you get fast results as soon as the game ends! Whether you're at home or on the go, the JodiPlay website and app make it simple to jump in and start playing.
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

          <h2>How to Win</h2>
          <p>
            Winning in Main Mumbai Satta Matka is all about guessing the right numbers. Some people use guessing charts or try their luck with a final number. Others trust their instincts. Whatever method you choose, it's always exciting to see if your numbers match!
            If you win, it's quick and easy to check the matka result and see how much you've won. The results are instantly updated on JodiPlay, so you don't have to wait long.
          </p>

          <h2>Why Play Main Mumbai Satta Matka?</h2>
          <h3>Here's why Main Mumbai Satta Matka is a great game:</h3>
          <ul>
            <li>Easy to learn: Anyone can play!</li>
            <li>Fast results: You don't have to wait long.</li>
            <li>Day and night play: Join games anytime.</li>
            <li>Panel charts: Use them to help guess numbers.</li>
            <li>Online access: Play on your phone or computer via JodiPlay.</li>
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

          <h2>Check Your Results</h2>
          <p>
            After you've played, you can check the matka result online. The results are updated quickly, so you don't have to wait long to see if you've won. You can also check the day chart or night chart to see all the results.
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