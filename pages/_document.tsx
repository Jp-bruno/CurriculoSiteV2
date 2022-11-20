import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Front-end Developer" key="title" />
        <meta
          property="og:image"
          content="https://github.com/Jp-bruno/Jp-bruno/blob/master/public/thumbnail.png?raw=true"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/icons8-react-48.png" />
        <meta name="description" content="JP Bruno - Front-end Developer" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
