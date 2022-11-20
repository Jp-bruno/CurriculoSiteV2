import type { AppProps } from "next/app";
import Head from "next/head";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

import "../styles/globals.css";
import "../styles/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Front-end Developer</title>
        <meta property="og:title" content="Front-end Developer" key="title" />
        <meta property="og:image" content="/thumbnail.png" key="thumbnail" />
        <link rel="icon" href="/icons8-react-48.png" />
        <meta name="description" content="JP Bruno - Front-end Developer" />
      </Head>
      <AppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
