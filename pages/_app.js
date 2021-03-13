import Head from "next/head";
import { Fragment, useEffect } from "react";
import { ThemeProvider as ThemeProviderMaterialUI } from "@material-ui/core/styles";
import { ThemeProvider as ThemeProviderStyledComponets } from "styled-components";
import CssBaselineMaterialUI from "@material-ui/core/CssBaseline";
import { elementType, object } from "prop-types";

import themeMaterialUI from "../src/styles/theme";
import { GlobalStyleStyledComponets } from "../src/styles/globalStyle";

import { wrapper } from "../src/redux/store";

function App({ Component, pageProps }) {
  useEffect(() => {
    // Remova o CSS injetado no lado do servidor.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProviderStyledComponets theme={themeMaterialUI}>
        <ThemeProviderMaterialUI theme={themeMaterialUI}>
          {/* O CssBaseline deu início a uma linha de base elegante, consistente e simples para construir. */}
          <GlobalStyleStyledComponets />
          <CssBaselineMaterialUI />
          <Component {...pageProps} />
        </ThemeProviderMaterialUI>
      </ThemeProviderStyledComponets>
    </Fragment>
  );
}

App.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
};

export default wrapper.withRedux(App);
