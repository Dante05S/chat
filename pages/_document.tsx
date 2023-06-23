import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <link
          rel="shortcut icon"
          href={`${process.env.PUBLIC_URL ?? ''}/favicon.png`}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
