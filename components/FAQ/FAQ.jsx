import React from "react";
import Accordian, { AccordianItem } from "./Accordian";
import styles from "../../styles/Home.module.css";

function FAQ({ FaqRef }) {
  return (
    <div ref={FaqRef} className="px-4 xl:px-16  pt-28">
      <div className={styles.section_container}>
        {/* <div className={styles.section_heading}>
          <h2 className="text-white text-center">MORE QUESTIONS?</h2>
        </div> */}

        <div className={styles.section_sub_heading}>
          <h2 className="h2-Info text-3xl font-bold text-gray-800 text-center">
            FAQ’s
          </h2>
        </div>
      </div>

      <div className="pt-16 lg:flex flex-wrap">
        <div>
          <div className="w-full faq_section">
            <Accordian>
              <AccordianItem
                value="1"
                style={{ color: "#fff" }}
                trigger="What is Satta Matka?"
              >
                Satta Matka is a fun guessing game. You pick numbers and try to
                guess the right ones to win money. It started as a lottery game
                and is now played online using apps like the best online Matka
                app.
              </AccordianItem>
              <AccordianItem
                value="2"
                style={{ color: "#fff" }}
                trigger="How Satta Matka Works?"
              >
                In Satta Matka, you choose numbers from a set. Once the game
                starts, results are announced. If your numbers match, you win!
                You can play it on a trusted online Matka app or use an online
                Matka play app for fast and easy gaming.
              </AccordianItem>
              <AccordianItem
                value="3"
                style={{ color: "#fff" }}
                trigger="How to Play Satta Matka?"
              >
                <div>
                  <p className="text-white">
                    1. Download an online Matka app like JODI PLAY.
                  </p>
                  <p className="text-white">
                    2. Sign up and deposit money. You can start with a 100
                    deposit Matka app download or 200 deposit Matka app
                    download.
                  </p>
                  <p className="text-white">
                    3. Pick your lucky numbers from the chart
                  </p>
                  <p className="text-white">
                    4. Wait for the results! If you guess right, you win.
                  </p>
                </div>
              </AccordianItem>

              <AccordianItem
                value="4"
                style={{ color: "#fff" }}
                trigger="How to Read Charts?"
              >
                <div>
                  <p className="text-white">
                    Charts show past results in Satta Matka. They help you see
                    patterns and guess better. You can find these charts on your
                    satta Matka app or online Matka app download. Use them to
                    check numbers and plan your next game!. Enjoy playing Satta
                    Matka on the best online Satta app and check your live Satta
                    Matka results anytime!.
                  </p>
                </div>
              </AccordianItem>

              <AccordianItem
                value="5"
                style={{ color: "#fff" }}
                trigger="Why Choose an Online Matka App?"
              >
                <div>
                  <p className="text-white">
                    Online Matka apps make the game easy and fun. You can play
                    anytime, anywhere, and check live Satta Matka results. They
                    are secure, fast, and offer features like instant
                    withdrawals, expert tips, and game updates. Enjoy Satta
                    Matka with the best online Satta app today!.
                  </p>
                </div>
              </AccordianItem>
            </Accordian>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
