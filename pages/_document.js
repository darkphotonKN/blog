/* For Setting Up HTML-specific Details */

import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          {/* NProgress for Loaders, Spinners, Progress Bars */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />

          {/* Main CSS */}
          <link rel="stylesheet" href="/static/css/main.css" />
        </Head>

        <body>
          <Main />
          <NextScript />

          {/* Font Awesome */}
          <script src="https://kit.fontawesome.com/15a14986db.js" />
        </body>
      </html>
    );
  }
}
