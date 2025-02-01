import HomeMain from "@/components/HomeMain";
import MovingText from "@/components/MovingText";
import Head from "next/head"; // Import Head from next/head
import React from "react";

function Home() {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Jodi Play, Satta Matka, Online Matka Play, Madhur Matka, Kalyan Matka, Satta Results, Matka Guessing, Satta Matka App"
        />
        <meta
          property="og:title"
          content="Jodi Play: Your Ultimate Online Satta Matka Experience"
        />
        <meta
          property="og:description"
          content="Discover Jodi Play, your go-to online Satta Matka app! Experience thrilling games, quick results, and a vibrant community. Join now for endless fun and excitement"
        />
        <meta property="og:site_name" content="Jodiplay" />
        <meta property="og:url" content="https://jodiplay.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=1aZZrVLYE2KOsPec4_nTdhhZ70MxBbbgZ"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jodiplay.com" />
      </Head>
      {/* <MovingText /> */}
      <HomeMain />
    </div>
  );
}

export default Home;
