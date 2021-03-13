import { Fragment } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { ServerStyleSheet } from "styled-components";

import theme from "../src/styles/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          {/* PWA cor primária */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` pertence a` _document` (em vez de `_app`),
// é compatível com a geração do lado do servidor (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Ordem de resolução

  // No servidor:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render

  // No servidor com erro:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render

  // No cliente
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Renderize o aplicativo e a página e obtenha o contexto da página com os efeitos colaterais coletados.
  const sheetsStyledComponents = new ServerStyleSheet();
  const sheetsMaterialUI = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhancerApp: (App) => (props) =>
          sheetsStyledComponents.collectStyles(sheetsStyledComponents.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          {sheetsMaterialUI.getStyleElement()}
          {sheetsStyledComponents.getStyleElement()}
        </Fragment>
      ),
    };
  } finally {
    sheetsStyledComponents.seal();
  }
};
