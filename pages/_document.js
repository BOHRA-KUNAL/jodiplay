import { getSetData } from "@/utils";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  let title = getSetData("docTitle");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "JodiPlay",
    url: "https://jodiplay.com/",
    description:
      "JodiPlay is your ultimate online Satta Matka platform, offering fast results, exciting games, and a vibrant community for enthusiasts.",
    sameAs: [
      "https://www.facebook.com/jodiplay",
      "https://www.instagram.com/jodi.play",
    ],
  };

  const appSchemaData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "JodiPlay - Satta Matka Play",
    operatingSystem: "iOS, Android",
    applicationCategory: "Game",
    url: "https://jodiplay.com/",
    downloadUrl: "https://backend.jodiplay.com/logo/Jodi_Play.apk",
    description:
      "JodiPlay is an exciting online Satta Matka app offering fast gameplay, live results, and engaging features for Matka enthusiasts.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "2000",
    },
    screenshot: [
      "https://drive.google.com/uc?id=1b7NdoKNGDeqpfppQCnd8r4NBjny0Yj0g",
      "https://drive.google.com/uc?id=1pram2JuXaerD8bCDHN71XgSezPk0N5Tk",
    ],
    applicationSubCategory: "BettingGame",
    softwareVersion: "1.0",
    inLanguage: "en",
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Satta Matka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Satta Matka is a form of gambling that originated in India. It involves betting on numbers drawn from a pot, or 'Matka,' which is where the name comes from. Over the years, it has evolved into a sophisticated system with various types of games, each offering unique ways to place bets and win.",
        },
      },
      {
        "@type": "Question",
        name: "How Satta Matka Works?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Satta Matka, players place bets on numbers drawn from a pot. The game typically involves selecting a number or a combination of numbers, and if these numbers match the drawn numbers, the player wins. The game is primarily based on luck, though some players use statistical analysis and prediction techniques to improve their chances.",
        },
      },
      {
        "@type": "Question",
        name: "Why Choose JODI PLAY?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1. User-Friendly Interface\n2. Fast and Accurate Results\n3. Trusted and Secure\n4. Exciting Bonuses and Promotions\n5. 24/7 Customer Support",
        },
      },
      {
        "@type": "Question",
        name: "How to Play Satta Matka on JODI PLAY?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1. Visit jodiplay.com\n2. Download App\n3. Register and Create an Account\n4. Choose Your Game\n5. Place Your Bets\n6. Check Live Results\n7. Collect Your Winnings",
        },
      },
    ],
  };

  return (
    <Html lang="en">
      <Head>
        {/* <title>Jodi Play | The Best Online Satta Matka App for Fun and Wins</title> */}
        <title>
        Best Online Matka Play App - Download Now!
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Play Satta Matka on the JodiPlay app or website. We provide fast results and a variety of Matka bazaars and markets. Download the Online Matka Play App now!"
        />
        

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />

        {/* <!-- Google Tag Manager --> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NRV6SBH5')
          `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRV6SBH5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
