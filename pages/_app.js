import { Fragment, useEffect } from "react";

import Head from "next/head";

import CssBaselineMaterial from "@material-ui/core/CssBaseline";
import { ThemeProvider as ThemeProviderMaterial } from "@material-ui/core/styles";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { elementType, object } from "prop-types";

import { theme } from "../src/styles/theme";
import { GlobalStyleStyled } from "../src/styles/globalStyle";

import { wrapper } from "../src/redux/store";

import Layout from "../src/components/Layout";

function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>e-commerce</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProviderStyled theme={theme}>
        <ThemeProviderMaterial theme={theme}>
          <GlobalStyleStyled />
          <CssBaselineMaterial />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProviderMaterial>
      </ThemeProviderStyled>
    </Fragment>
  );
}

App.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
};

export default wrapper.withRedux(App);
