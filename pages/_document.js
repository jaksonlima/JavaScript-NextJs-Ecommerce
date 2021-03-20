import { Children } from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

import { ServerStyleSheets } from "@material-ui/core/styles";
import { ServerStyleSheet } from "styled-components";

// import { theme } from "../src/styles/theme";
export default class _Document extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

_Document.getInitialProps = async (ctx) => {
  const materialSheets = new ServerStyleSheets();
  const styledSheets = new ServerStyleSheet();

  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => styledSheets.collectStyles(materialSheets.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...Children.toArray(initialProps.styles),
        materialSheets.getStyleElement(),
        styledSheets.getStyleElement(),
      ],
    };
  } finally {
    styledSheets.seal();
  }
};
