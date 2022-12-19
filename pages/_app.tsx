import type { AppProps } from "next/app";
import Head from "next/head";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import LanguageContextProvider from "../context/languageContext";

import "../styles/globals.css";
import "../styles/reset.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Front-end Developer</title>
      </Head>
      <LanguageContextProvider>
        <AppBar />
        <Component {...pageProps} />
        <Footer />
      </LanguageContextProvider>
    </>
  );
}

export default App;
