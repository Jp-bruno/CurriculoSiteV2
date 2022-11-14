import type { AppProps } from 'next/app';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

import '../styles/globals.css';
import '../styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
