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
      </Head>
      <AppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
