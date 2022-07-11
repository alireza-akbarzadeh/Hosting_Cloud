import { useState } from "react";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  NextScript,
  Html,
  Head,
  Main,
} from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html data-theme={"light"} lang="en">
        <Head>
          <title>Modify - GO Online for just $9</title>
          <meta
            name="description"
            content={"Deploy your website at less than 60 second"}
          />
          <meta name={"og:title"} content={"Modify..."} />
          <meta name={"og:description"} content={"Modify..."} />
          <meta name={"og:type"} content={"website"} />
          <meta name={"og:url"} content={"https://moshified.com"} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:ital,wght@0,300;0,500;1,100;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
