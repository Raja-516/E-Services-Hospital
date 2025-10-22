// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload only your critical global CSS */}
        <link rel="preload" href="/styles/globals.css" as="style" />
        <link rel="stylesheet" href="/styles/globals.css" />

        {/* Optional: Add other meta tags or fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
