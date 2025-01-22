import React from "react";
import { getSetData } from "@/utils";
import Link from "next/link";
// Assuming getSetData is a utility function you have to manage local storage or cookies
let isLoggedIn = !!getSetData("token"); // Check if the user is logged in
import { useRouter } from "next/router";
import FAQ from "./FAQ/FAQ";
import BlogSlider from "./common/blogslider";
import styles from "../styles/Home.module.css";

const Info = () => {
  const router = useRouter();

  return (
    <>
      {!isLoggedIn ? (
        <div className="">
          <div
            style={{
              color: "#000",
              fontSize: "14px",
              borderRadius: "0px",
              fontWeight: "700",
              padding: "15px",
              textAlign: "center",
              border: "GOLDENROD solid 3px",
              fontStyle: "italic",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            className="satta-matka-block bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <section className=" mb-8">
              <h1 className="h2-Info text-3xl font-bold text-gray-800">
                Introduction to JodiPlay: Online Matka Play App
              </h1>
              {/* <h1 className="h2-Info text-3xl font-bold text-gray-800">
            Introduction to JODI PLAY
            </h1> */}
              <p
                className=" pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                Welcome to JODI PLAY, your trusted platform for everything Satta
                Matka! Here, you can play Matka online and enjoy exciting games
                like Gali, Desawar, Kalyan, Milan, Rajdhani, and more. Our
                platform is safe, easy to use, and offers fast withdrawal
                options. Whether you're new or experienced, JODI PLAY is the
                best online Matka app for your gaming needs.
              </p>
            </section>

            <section className="text-center mb-8">
              <h2
                className="h2-Info text-2xl font-semibold text-gray-800"
                style={{ textAlign: "left" }}
              >
                Live Satta Matka Results and Updates
              </h2>
              <p
                className="pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                Get real-time Live Satta Matka Results and stay updated with the
                latest game outcomes. Our platform ensures accurate and fast
                results, so you never miss a chance to win. Track your favorite
                games anytime, anywhere with our reliable online Matka play app.
              </p>
            </section>

            <section className="mb-8">
              <h2
                className="h2-Info text-xl font-semibold text-gray-800"
                style={{ textAlign: "left" }}
              >
                Expert Tips and Strategies
              </h2>
              <p
                className="pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                Want to improve your chances of winning? At JODI PLAY, we
                provide expert tips and strategies to help you play smarter.
                Whether you’re a beginner or an experienced player, you’ll find
                useful advice to boost your skills and confidence.
              </p>
            </section>

            <section className="mb-8">
              <h2
                className="h2-Info text-xl font-semibold text-gray-800"
                style={{ textAlign: "left" }}
              >
                Why Choose JODI PLAY?
              </h2>
              <p
                className="pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                <strong>• Trusted Online Matka App:</strong> Play safely on a
                secure and reliable platform.
              </p>
              <p
                className="pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                <strong>• Fast Withdrawal Matka App:</strong> Enjoy instant
                payouts without any hassle.
              </p>
              <p
                className="pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                <strong>• 200 Deposit Matka App Download: </strong> Begin your
                journey with just ₹200!
              </p>
              <p
                className="pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                <strong>• 100 Deposit Matka App Download: </strong> Start small
                and aim big with our budget-friendly options.
              </p>
              <p
                className="pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                <strong>• Play Online Matka: </strong> Conveniently enjoy your
                favorite games anytime, anywhere.
              </p>
            </section>

            <section className="mb-8">
              <h2
                className="h2-Info text-xl font-semibold text-gray-800"
                style={{ textAlign: "left" }}
              >
                How to Start Playing on JODI PLAY
              </h2>
              <p
                className="pinfo mt-2 text-gray-700"
                style={{ textAlign: "left" }}
              >
                1. <strong>Download the online Matka app</strong> from our website.
              </p>
              <p
                className="pinfo mt-2 text-gray-700"
                style={{ textAlign: "left" }}
              >
                2. <strong>Sign up</strong> by filling in your details and make a quick deposit.
              </p>
              <p
                className="pinfo mt-2 text-gray-700"
                style={{ textAlign: "left" }}
              >
                3. <strong>Choose from popular games</strong> like Kalyan, Milan, or Rajdhani Matka.
              </p>
              <p
                className="pinfo mt-2 text-gray-700"
                style={{ textAlign: "left" }}
              >
                4. <strong>Play, win,</strong> and withdraw your winnings with ease!
              </p>
            </section>

            <section className="mb-8">
              <h2
                className="h2-Info text-lg font-semibold text-gray-800"
                style={{ textAlign: "left" }}
              >
                The Best Online Matka App Features
              </h2>
              <p
                className="pinfo mt-4 text-gray-700"
                style={{ textAlign: "left" }}
              >
                JODI PLAY is more than just an app – it’s your gateway to the
                ultimate Satta Matka experience. We combine modern technology
                with trusted gameplay to create a seamless platform. With
                real-time updates, accurate charts, and live results, you can
                trust us to deliver the best service.
              </p>
            </section>
          </div>

          {/* <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Main Bazar
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Main Bazar offers both day and night charts. This means you can
              play during the day or wait for the night to test your luck.
            </p>
            <button
              onClick={() => router.push("/main-bazaar")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Main Bazar, Morning Time Bazar, Time Bazar Night Chart,
              Time Bazar Second, Time Bazar Nikal, Time Bazar Guessing.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Kalyan Matka
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Kalyan Matka is famous for its high stakes and substantial
              payouts. This game is played with a unique set of rules and offers
              various betting options, making it a favorite among experienced
              players.
            </p>
            <button
              onClick={() => router.push("/kalyan-matka")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Kalyan Matka, Kalyan Matka Results, Kalyan Matka
              Betting, Kalyan Matka Game
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Milan Morning
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Milan Morning involves betting on numbers drawn at specific times
              of the day. It’s known for its balanced odds and frequent draws,
              providing players with multiple opportunities to win.
            </p>
            <button
              onClick={() => router.push("/milan-morning")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Milan Morning, Milan Morning Results, Milan Morning
              Betting, Milan Matka Game
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Rajdhani Matka
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Rajdhani Matka is a prestigious game with high stakes. Players
              place bets on a range of numbers, and the results are announced at
              scheduled intervals. Rajdhani Matka is often associated with
              substantial rewards and is popular among high-stakes gamblers.
            </p>
            <button
              onClick={() => router.push("/rajdhani-matka")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Rajdhani Matka, Rajdhani Matka Results, Rajdhani Matka
              Betting, Rajdhani Matka Game
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Main Mumbai Matka
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Main Mumbai Matka offers a traditional gaming experience with a
              modern twist. It’s played with a classic set of rules and has a
              loyal following among players who prefer a more traditional
              approach to Satta Matka.
            </p>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Main Mumbai Matka is known for its exciting gameplay and potential
              for big wins. Players can enjoy this classic game with modern
              conveniences on our platform.
            </p>
            <button
              onClick={() => router.push("/main-mumbai")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Main Mumbai Matka, Main Mumbai Matka Results, Main
              Mumbai Matka Betting, Main Mumbai Matka Game
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Sri Devi Matka
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Sridevi Morning is a popular <strong>Satta Matka</strong> game
              that takes place during the early hours of the day.
            </p>
            <button
              onClick={() => router.push("/sridevi")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Sridevi Morning, Satta Matka, JodiPlay, Satta Tips,
              Online Betting, Satta Results.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Madhur Morning
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Madhur Morning is a famous Satta Matka game played in India. It is
              part of the bigger Matka bazar, with fast opening and closing
              results.
            </p>
            <button
              onClick={() => router.push("/madhur-morning")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Madhur Morning, Satta Matka, Madhur Morning Satta Matka,
              JodiPlay, Satta Matka Results, Panel Chart, Satta Matka.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Rudraksh Morning
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Rudraksh Morning is a fun <strong>Satta Matka</strong> game you
              can play every day on JodiPlay. It's simple, fast, and gives you
              many chances to win big.
            </p>
            <button
              onClick={() => router.push("/rudraksh-morning")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Rudraksh Morning, Satta Matka, Jodi, Chart, Guessing,
              Result, Panel, Online, Play, Fast Result.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Karnataka Day
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Karnataka Day is a well-known <strong>Satta Matka</strong> game
              that runs continuously during the day. It attracts a wide audience
              thanks to its frequent betting windows and exciting gameplay.
            </p>
            <button
              onClick={() => router.push("/karnataka-day")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Karnataka Day, Satta Matka, Matka game, JodiPlay, Online
              betting, Karnataka Day results, Karnataka Day chart, Matka
              guessing tips.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Gali Disawar
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Gali Disawar is a popular Satta Matka game where players guess
              numbers to win. It is known for its exciting gameplay and frequent
              draws.
            </p>
            <button
              onClick={() => router.push("/galidisawarpage")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "10px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Gali Disawar, Gali Disawar Results, Gali Disawar
              Betting, Gali Disawar Game
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "#000",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              textAlign: "left",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "black",
              marginBottom: "10px",
            }}
            className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8"
          >
            <h4
              style={{
                fontSize: "18px",
                color: "indigo",
                margin: "0",
                padding: "5px",
                fontWeight: "600",
                borderColor: "black",
              }}
              className="text-lg font-semibold text-gray-800"
            >
              Time Bazaar
            </h4>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Time Bazaar offers both morning and night charts. This means you
              can play during the day or wait for the night to test your luck.
            </p>
            <button
              onClick={() => router.push("/time-bazaar")}
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              View More
            </button>
            <p
              style={{
                color: "#000",
                margin: "1px",
                padding: "5px",
                fontSize: "14px",
                fontWeight: 700,
              }}
              className="mt-4 text-gray-700"
            >
              Keywords: Time Bazaar, Time Bazaar Results, Time Bazaar Betting,
              Time Bazaar Game
            </p>
          </div> */}

          <div
            style={{
              color: "#000",
              fontSize: "14px",
              borderRadius: "0px",
              fontWeight: "700",
              padding: "15px",
              textAlign: "center",
              border: "GOLDENROD solid 3px",
              fontStyle: "italic",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            className="satta-matka-block bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <section className=" mb-8">
              <h2
                className="h2-Info text-3xl font-bold text-gray-800"
                style={{ textAlign: "left" }}
              >
                Stay Ahead with JODI PLAY
              </h2>
              <p
                className="pinfo mt-4 text-gray-700 mb-0"
                style={{ textAlign: "left" }}
              >
                With our online Satta Matka app, you get:
              </p>
              <p
                className="pinfo mt-2 text-gray-700 mb-0"
                style={{ textAlign: "left" }}
              >
                • Easy access to live updates and results.
              </p>
              <p
                className="pinfo mt-2 text-gray-700 mb-0"
                style={{ textAlign: "left" }}
              >
                • A user-friendly interface for smooth navigation.
              </p>
              <p
                className="pinfo mt-2 text-gray-700 mb-0"
                style={{ textAlign: "left" }}
              >
                • Expert-backed strategies to increase your winning chances.
              </p>
              <p
                className="pinfo mt-2 text-gray-700 mb-0"
                style={{ textAlign: "left" }}
              >
                • A platform that’s secure and trusted by thousands of players.
              </p>

              <h2
                className="h2-Info pt-2 text-3xl font-bold text-gray-800"
                style={{ textAlign: "left" }}
              >
                Play Matka Online Today!
              </h2>
              <p
                className="pinfo mt-4 text-gray-700 mb-0"
                style={{ textAlign: "left" }}
              >
                JODI PLAY is designed for everyone who loves Satta Matka.
                Whether you’re looking for a trusted online Matka app or the
                best online Satta app, we’ve got you covered. Join now and
                experience the thrill of playing your favorite games with fast
                withdrawals and real-time updates.
              </p>
              <p
                className="pinfo mt-4 text-gray-700 mb-0"
                style={{ textAlign: "left" }}
              >
                Don’t wait! <strong>Online Matka App</strong> Download today and enjoy the
                excitement of Satta Matka anytime, anywhere!
              </p>
            </section>

            {/* <section className="text-center mb-8">
              <h2 className="h2-Info text-2xl font-semibold text-gray-800">
                Understanding Satta Matka Charts and Trends
              </h2>
              <p className="pinfo mt-4 text-gray-700">
                Charts and trends play a crucial role in predicting outcomes in
                Satta Matka. Here’s how you can use them effectively:
              </p>
              <p className="pinfo mt-4 text-gray-700">Importance of Charts</p>
              <p className="pinfo mt-4 text-gray-700">
                Charts provide historical data on past results, helping players
                analyze patterns and trends. This information can be used to
                make more informed betting decisions. Keywords: Satta Matka
                Charts, Importance of Matka Charts, Analyzing Matka Trends
              </p>
              <p className="pinfo mt-4 text-gray-700">Types of Charts</p>
              <p className="pinfo mt-4 text-gray-700">- Madhur Satta Chart</p>
              <p className="pinfo mt-4 text-gray-700">- Kalyan Matka Chart</p>
              <p className="pinfo mt-4 text-gray-700">- Milan Matka Chart</p>
              <p className="pinfo mt-4 text-gray-700">- Rajdhani Matka Chart</p>
              <p className="pinfo mt-4 text-gray-700">- Mumbai Matka Chart</p>
              <p className="pinfo mt-4 text-gray-700">
                - Time Bazar Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">- Kalyan Panna Record</p>
              <p className="pinfo mt-4 text-gray-700">
                - Kalyan Night Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                - Main Bazar Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                - Madhur Morning Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                - Madhur Day Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                - Madhur Night Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                - Milan Day Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                » Milan Night Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                » Rajdhani Day Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                » Rajdhani Night Panna Record
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Each chart provides data on specific games and helps in
                understanding the historical performance of numbers.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: Madhur Satta Chart, Kalyan Chart, Milan Chart,
                Rajdhani Chart, Mumbai Chart
              </p>
            </section>

            <section className="mb-8">
              <h3 className="h2-Info text-xl font-semibold text-gray-800">
                How to Read Charts
              </h3>
              <p className="pinfo mt-4 text-gray-700">
                Understanding how to read and interpret charts is essential for
                effective betting. Our site offers guides and tips on how to
                analyze chart data and use it to your advantage.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: How to Read Satta Matka Charts, Interpreting Matka
                Charts, Matka Chart Analysis
              </p>
            </section>

            <section className="mb-8">
              <h3 className="h2-Info text-xl font-semibold text-gray-800">
                Expert Tips and Strategies
              </h3>
              <p className="pinfo mt-4 text-gray-700">Betting Strategies</p>
              <p className="pinfo mt-4 text-gray-700">
                - Fixed Numbers: Focus on a set of numbers that appear
                frequently.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                - Pattern Recognition: Look for patterns in past results to
                inform your bets.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                - Risk Management: Manage your betting budget to avoid
                significant losses.
              </p>

              <p className="pinfo mt-4 text-gray-700">
                Keywords: Satta Matka Betting Strategies, Fixed Numbers, Pattern
                Recognition, Risk Management
              </p>

              <p className="pinfo mt-4 text-gray-700">
                Common Mistakes to Avoid
              </p>

              <p className="pinfo mt-4 text-gray-700">
                Avoid common pitfalls such as betting impulsively, ignoring
                trends, or chasing losses. Our experts provide insights on how
                to steer clear of these mistakes.
              </p>

              <p className="pinfo mt-4 text-gray-700">
                Keywords: Common Satta Matka Mistakes, Avoiding Betting
                Pitfalls, Satta Matka Tips
              </p>

              <p className="pinfo mt-4 text-gray-700">
                Using Expert Predictions
              </p>

              <p className="pinfo mt-4 text-gray-700">
                Leverage predictions from our team of experts to guide your
                betting decisions. Our predictions are based on extensive
                analysis and historical data.
              </p>

              <p className="pinfo mt-4 text-gray-700">
                Keywords: Expert Satta Matka Predictions, Matka Betting Tips,
                Professional Betting Advice
              </p>
            </section>

            <section className="mb-8">
              <h3 className="h2-Info text-xl font-semibold text-gray-800">
                Live Satta Matka Results and Updates
              </h3>
              <p className="pinfo mt-4 text-gray-700">
                Stay updated with the latest Satta Matka results and
                announcements:
              </p>
            </section>

            <section className="mb-8">
              <h4 className="h2-Info text-lg font-semibold text-gray-800">
                Real-Time Updates
              </h4>
              <p className="pinfo mt-4 text-gray-700">
                Our site provides real-time updates for all Satta Matka games.
                You can check the latest results and get immediate information
                on game outcomes.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: Real-Time Satta Matka Results, Live Matka Updates,
                Latest Satta Results
              </p>
              <p className="pinfo mt-4 text-gray-700">Results Archive</p>
              <p className="pinfo mt-4 text-gray-700">
                Access an archive of past results for all games. This feature
                helps in analyzing historical data and making informed
                predictions.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: Satta Matka Results Archive, Past Matka Results,
                Historical Matka Data
              </p>
            </section>

            <section className="mb-8">
              <h4 className="h2-Info text-lg font-semibold text-gray-800">
                Why Choose JODI PLAY?
              </h4>
              <p className="pinfo mt-4 text-gray-700">
                Fast and Accurate Results
              </p>
              <p className="pinfo mt-4 text-gray-700">
                We ensure that you receive the fastest and most accurate results
                for all Satta Matka games. Our technology and infrastructure are
                designed to provide timely updates.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: Fast Satta Matka Results, Accurate Matka Results,
                Reliable Matka Updates
              </p>
              <p className="pinfo mt-4 text-gray-700">
                User-Friendly Interface
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Our website is designed to be user-friendly, making it easy for
                you to navigate, place bets, and access information. Enjoy a
                seamless experience every time you visit.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: User-Friendly Satta Matka Site, Easy Navigation,
                Online Betting Experience
              </p>
              <p className="pinfo mt-4 text-gray-700">Expert Support</p>
              <p className="pinfo mt-4 text-gray-700">
                Our team of experts is available to provide support and answer
                any questions you may have. We are committed to helping you have
                the best gaming experience.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: Satta Matka Support, Expert Assistance, Customer
                Service
              </p>
            </section>

            <section className="mb-8">
              <h4 className="h2-Info text-lg font-semibold text-gray-800">
                Legal and Responsible Gaming
              </h4>
              <p className="pinfo mt-4 text-gray-700">
                Satta Matka is a form of gambling and should be approached
                responsibly. Here’s what you need to know:
              </p>
              <p className="pinfo mt-4 text-gray-700">Legal Considerations</p>
              <p className="pinfo mt-4 text-gray-700">
                Ensure that you are aware of and comply with local laws and
                regulations related to gambling. The legality of Satta Matka
                varies by region, so it’s important to be informed.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: Satta Matka Legality, Gambling Laws, Responsible
                Gaming
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Responsible Gaming Practices
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Set limits for your betting activities and never gamble more
                than you can afford to lose. Responsible gaming practices are
                essential for ensuring a safe and enjoyable experience.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: Responsible Gambling, Betting Limits, Safe Gaming
                Practices
              </p>
              <p className="pinfo mt-4 text-gray-700">Resources for Help</p>
              <p className="pinfo mt-4 text-gray-700">
                If you need assistance or support related to gambling issues,
                there are resources available to help. Our site provides
                information on how to access support services.
              </p>
              <p className="pinfo mt-4 text-gray-700">
                Keywords: Gambling Support Resources, Help for Gamblers,
                Responsible Gaming Resources
              </p>
            </section> */}
          </div>

          <div style={{ width: "100%" }}>
            <div className="d-flex justify-content-between align-items-center px-4">
              <div>
                <div className={styles.section_sub_heading}>
                  <h2 className="h2-Info text-3xl font-bold text-gray-800 text-center pt-4">
                    Blog's
                  </h2>
                </div>
              </div>
            </div>

            <BlogSlider />

            <div className="d-flex justify-content-center py-4">
              <button
                onClick={() => router.push("/blog")}
                style={{
                  backgroundColor: "#e3d716",
                  color: "white",
                  padding: "10px 20px",
                  width: "50%",
                  color: "000080",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                View More
              </button>
            </div>
          </div>

          <div className="disclaimer bg-yellow-100 p-6 pb-4 rounded-lg shadow-md mt-8 text-center pt-4">
            <p className="h2-Info">👉 Conclusion 👈</p>
            <p style={{ color: "#fafafa" }} className="mt-2 text-gray-700">
              JODI PLAY is your one-stop destination for all Satta Matka needs.
              With real-time updates, expert tips, and a trusted platform, we
              make it easy for you to enjoy and win. Whether you’re a seasoned
              player or just starting, our online Matka app offers the best
              features, fast withdrawals, and secure gameplay. Join today to
              experience the thrill of online satta play and take your gaming to
              the next level. Download Satta Matka Online App now and start
              winning!
            </p>
          </div>
          {/* <div className="container-keyword">
            <div className="widget-title text-large2 yellow-gradient mb-1 stol-500">
              Keywords
            </div>
            <ul className="new-footer-row">
              <li>
                <a href="#">Jodi Play Satta Matka</a>
              </li>
              <li>
                <a href="#">Online Satta Matka Games</a>
              </li>
              <li>
                <a href="/kalyan-matka">Kalyan Matka - Online matka play app</a>
              </li>
              <li>
                <a href="#">Responsible Gaming</a>
              </li>
              <li>
                <a href="#">Expert Satta Matka Tips</a>
              </li>
              <li>
                <a href="#">Jodi Play Satta Tips</a>
              </li>
              <li>
                <a href="/rajdhani-matka">Rajdhani Matka</a>
              </li>
              <li>
                <a href="#">Leak Jodi Matka</a>
              </li>
              <li>
                <a href="#">Satta Matka</a>
              </li>
              <li>
                <a href="/main-bazaar">Main Bazar - Online matka play app</a>
              </li>
              <li>
                <a href="/milan-morning">Milan Morning - Matka play app</a>
              </li>
              <li>
                <a href="#">Kalyan Night</a>
              </li>
              <li>
                <a href="#">Kalyan Day Matka</a>
              </li>
              <li>
                <a href="#">Matka Games</a>
              </li>
              <li>
                <a href="#">Madhur Satta</a>
              </li>
              <li>
                <a href="#">Gali Matka</a>
              </li>
              <li>
                <a href="#">Desawar Matka</a>
              </li>
              <li>
                <a href="#">Milan Matka</a>
              </li>
              <li>
                <a href="/main-mumbai">Main Mumbai Matka</a>
              </li>
              <li>
                <a href="#">Gali Result</a>
              </li>
              <li>
                <a href="#">Kalyan Result</a>
              </li>
              <li>
                <a href="#">Madhur Result</a>
              </li>
              <li>
                <a href="#">Desawar Result</a>
              </li>
              <li>
                <a href="#">Milan Result</a>
              </li>
              <li>
                <a href="#">Rajdhani Result</a>
              </li>
              <li>
                <a href="#">Mumbai Result</a>
              </li>
              <li>
                <a href="#">Satta Matka Tips</a>
              </li>
              <li>
                <a href="#">Satta Matka Charts</a>
              </li>
              <li>
                <a href="#">Kalyan Matka Chart</a>
              </li>
              <li>
                <a href="#">Madhur Matka Chart</a>
              </li>
              <li>
                <a href="#">Milan Matka Chart</a>
              </li>
              <li>
                <a href="#">Rajdhani Matka Chart</a>
              </li>
              <li>
                <a href="#">Mumbai Matka Chart</a>
              </li>
              <li>
                <a href="#">Satta Matka Expert</a>
              </li>
              <li>
                <a href="#">Satta Matka Predictions</a>
              </li>
              <li>
                <a href="#">Kalyan Night Result</a>
              </li>
              <li>
                <a href="#">Kalyan Day Result</a>
              </li>
              <li>
                <a href="#">Madhur Day</a>
              </li>
              <li>
                <a href="#">Madhur Night</a>
              </li>
              <li>
                <a href="#">Milan Day</a>
              </li>
              <li>
                <a href="#">Milan Night</a>
              </li>
              <li>
                <a href="#">Rajdhani Day</a>
              </li>
              <li>
                <a href="#">Rajdhani Night</a>
              </li>
              <li>
                <a href="#">Mumbai Worli Matka</a>
              </li>
              <li>
                <a href="#">Super Star Day</a>
              </li>
              <li>
                <a href="/sridevi">SRIDEVI MORNING</a>
              </li>
              <li>
                <a href="#">Bombay Bazar</a>
              </li>
              <li>
                <a href="#">Kalyan Matka Betting</a>
              </li>
              <li>
                <a href="#">Satta Matka Strategies</a>
              </li>
              <li>
                <a href="#">Satta Matka Jodi</a>
              </li>
              <li>
                <a href="#">Satta Matka Panna</a>
              </li>
              <li>
                <a href="#">Matka Guessing</a>
              </li>
              <li>
                <a href="#">Matka Fix Numbers</a>
              </li>
              <li>
                <a href="#">Satta Matka Live Updates</a>
              </li>
              <li>
                <a href="#">Kalyan Matka Live</a>
              </li>
              <li>
                <a href="#">Satta Matka Results</a>
              </li>
              <li>
                <a href="#">Madhur Bazar</a>
              </li>
              <li>
                <a href="#">Desawar Bazar</a>
              </li>
              <li>
                <a href="#">Milan Bazar</a>
              </li>
              <li>
                <a href="#">Rajdhani Bazar</a>
              </li>
              <li>
                <a href="#">Mumbai Bazar</a>
              </li>
              <li>
                <a href="#">Kalyan Matka Tips</a>
              </li>
              <li>
                <a href="#">Satta Matka Online</a>
              </li>
              <li>
                <a href="#">Matka Results Online</a>
              </li>
              <li>
                <a href="#">Madhur Matka Predictions</a>
              </li>
              <li>
                <a href="#">Gali Matka Results</a>
              </li>
              <li>
                <a href="#">Kalyan Night Tips</a>
              </li>
              <li>
                <a href="/sridevi">Sri Devi Matka</a>
              </li>
              <li>
                <a href="#">Kalyan Day Tips</a>
              </li>
              <li>
                <a href="/madhur-morning">
                  Madhur Morning - Online Matka Play App
                </a>
              </li>
              <li>
                <a href="/rudraksh-morning">Rudraksh Morning</a>
              </li>
              <li>
                <a href="#">Satta Matka Tricks</a>
              </li>
              <li>
                <a href="#">Satta Matka Online Results</a>
              </li>
              <li>
                <a href="#">Kalyan Matka Today</a>
              </li>
              <li>
                <a href="/time-bazaar">Time Bazaar</a>
              </li>
              <li>
                <a href="#">Madhur Matka Today</a>
              </li>
              <li>
                <a href="#">Milan Matka Today</a>
              </li>
              <li>
                <a href="#">Rajdhani Matka Today</a>
              </li>
              <li>
                <a href="/karnataka-day">Karnataka Day</a>
              </li>
              <li>
                <a href="#">Mumbai Matka Today</a>
              </li>
              <li>
                <a href="#">Super Star Matka</a>
              </li>
              <li>
                <a href="/time-bazaar">Time Bazar - Matka App</a>
              </li>
              <li>
                <a href="#">Satta Bazar</a>
              </li>
              <li>
                <a href="#">Kalyan Satta Bazar</a>
              </li>
              <li>
                <a href="#">Madhur Satta Bazar</a>
              </li>
              <li>
                <a href="/galidisawarpage">
                  Gali Disawar - Online matka play app
                </a>
              </li>
              <li>
                <a href="#">Milan Satta Bazar</a>
              </li>
              <li>
                <a href="#">Rajdhani Satta Bazar</a>
              </li>
              <li>
                <a href="#">Mumbai Satta Bazar</a>
              </li>
              <li>
                <a href="#">Kalyan Night Satta</a>
              </li>
              <li>
                <a href="#">Kalyan Day Satta</a>
              </li>
              <li>
                <a href="#">Satta Matka Boss</a>
              </li>
              <li>
                <a href="#">Matka Boss</a>
              </li>
              <li>
                <a href="#">Kalyan Boss</a>
              </li>
              <li>
                <a href="#">Madhur Boss</a>
              </li>
              <li>
                <a href="#">Milan Boss</a>
              </li>
              <li>
                <a href="#">Rajdhani Boss</a>
              </li>
              <li>
                <a href="#">Mumbai Boss</a>
              </li>
              <li>
                <a href="#">Satta Matka Fix</a>
              </li>
              <li>
                <a href="#">Satta Matka Numbers</a>
              </li>
              <li>
                <a href="#">Satta Matka Panel</a>
              </li>
              <li>
                <a href="#">Matka Panel</a>
              </li>
            </ul>
          </div> */}

          <div className="pb-4">
            <FAQ />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Info;
