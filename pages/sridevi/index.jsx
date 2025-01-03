// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SriDevi() {
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
        <title>
          Sridevi Morning - JodiPlay | Online Satta Matka Game, Tips &
          Strategies
        </title>
        <meta
          name="description"
          content="Learn everything about the Sridevi Morning game in Satta Matka. Find tips, rules, and strategies to enhance your gameplay on JodiPlay."
        />
        <meta
          name="keywords"
          content="Sridevi Morning, Satta Matka, JodiPlay, Satta Tips, Online Betting, Satta Results"
        />
        <meta name="author" content="JodiPlay" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <h1>Welcome to JodiPlay</h1>
      </header>

      <section className="banner">
        <Image
          src="https://tradebrains.in/features/wp-content/uploads/2022/02/Online-Casinos-in-India-Cover-Image-1080x675.jpg"
          alt="Sridevi Morning Satta Matka"
          layout="fill"
          objectFit="cover"
        />
      </section>

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

      <main>
          <h1 style={{textAlign: 'center', margin: '20px auto'}}>Sridevi Morning - A Guide to Winning Big on JodiPlay</h1>
        <section className="content">
          <h2>What is Sridevi Morning?</h2>
          <p>
            Sridevi Morning is a popular <strong>Satta Matka</strong> game that
            takes place during the early hours of the day. It's one of the most
            exciting <Link href="/games">Satta Matka</Link> markets, offering
            players a chance to bet on their favorite numbers and win big. At
            JodiPlay, we make it easy to participate in this thrilling game from
            the comfort of your home.
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

          <h3>How to Play Sridevi Morning</h3>
          <p>
            To play <em>Sridevi Morning</em>, you need to select a combination
            of numbers from 0-9. The game is based on the results of the{" "}
            <strong>Matka draw</strong>, which reveals the winning numbers. You
            can bet on single numbers, Jodi (pair), or Patti (three numbers),
            depending on your strategy.
          </p>

          <h3>Sridevi Morning Results</h3>
          <p>
            Results for the Sridevi Morning game are declared early in the day,
            typically around 11:00 AM. At JodiPlay, we provide{" "}
            <Link href="/results">live updates of Sridevi Morning results</Link>
            , allowing you to check the winning numbers instantly. Stay tuned to
            our results page for real-time updates.
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

          <h2>Sridevi Morning Tips and Strategies</h2>
          <p>
            While Satta Matka is a game of chance, there are some expert tips
            and strategies that can help you improve your chances of winning:
          </p>
          <ul>
            <li>
              Start by analyzing the{" "}
              <Link href="/charts">previous results</Link> and patterns. History
              often provides insights into future outcomes.
            </li>
            <li>
              Manage your bankroll wisely and never bet more than you can afford
              to lose.
            </li>
            <li>
              Consider betting on a combination of singles, Jodis, and Patti to
              diversify your risk.
            </li>
            <li>
              Use expert advice from trusted sources on{" "}
              <strong>JodiPlay</strong> to guide your betting strategy.
            </li>
          </ul>

          <h3>Why Play Sridevi Morning on JodiPlay?</h3>
          <p>
            At JodiPlay, we are committed to providing a safe, reliable, and
            engaging experience for all our players. Here's why you should
            choose JodiPlay for your Satta Matka games:
          </p>
          <ul>
            <li>
              We offer <strong>fast and accurate results</strong> for all Satta
              Matka games, including Sridevi Morning.
            </li>
            <li>
              Our platform is easy to use, whether you're playing on your
              desktop or mobile device.
            </li>
            <li>
              JodiPlay provides <strong>expert tips and strategies</strong> to
              enhance your chances of winning.
            </li>
            <li>
              Enjoy a wide range of <Link href="/games">Satta Matka games</Link>
              , including Sridevi Morning, Gali, Desawar, and more.
            </li>
            <li>
              Get access to <strong>live updates</strong> and{" "}
              <Link href="/results">latest results</Link> all in one place.
            </li>
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

          <h2>Frequently Asked Questions (FAQ)</h2>
          <h3>1. How can I participate in Sridevi Morning?</h3>
          <p>
            You can easily participate by registering on JodiPlay. Choose your
            numbers and place your bets online.
          </p>

          <h3>2. Is there any strategy to win Sridevi Morning?</h3>
          <p>
            While there is no guaranteed strategy, following expert tips,
            studying past results, and managing your bets wisely can improve
            your chances of winning.
          </p>

          <h3>3. How often are Sridevi Morning results updated?</h3>
          <p>
            Sridevi Morning results are updated daily around 11:00 AM. You can
            find the latest results on our{" "}
            <Link href="/results">results page</Link>.
          </p>

          <h3>4. Can I play other Satta Matka games on JodiPlay?</h3>
          <p>
            Yes! JodiPlay offers a variety of games including{" "}
            <Link href="/gali">Gali Matka</Link>,{" "}
            <Link href="/desawar">Desawar</Link>, and{" "}
            <Link href="/kalyan">Kalyan Matka</Link>.
          </p>
        </section>

        <aside className="related-games">
          <h3>Explore Other Popular Satta Matka Games</h3>
          <ul>
            <li>
              <Link href="/gali">Gali Matka</Link>
            </li>
            <li>
              <Link href="/desawar">Desawar</Link>
            </li>
            <li>
              <Link href="/kalyan">Kalyan Matka</Link>
            </li>
            <li>
              <Link href="/milan">Milan Day/Night</Link>
            </li>
          </ul>
        </aside>
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
          background-color: #f9f9f9;
          color: #333;
        }
      `}</style>
    </div>
  );
}
