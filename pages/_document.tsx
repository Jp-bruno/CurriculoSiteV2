import { ServerStyleSheet } from "styled-components";

import Document, { Head, Html, Main, NextScript } from "next/document";


function SSRDocument() {
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
        <meta property="og:description" content="JP Bruno - Front-end Developer" />
        <meta property="og:url" content="https://jp-bruno.vercel.app/" />
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

SSRDocument.getInitialProps = async(ctx: any) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
}

export default SSRDocument