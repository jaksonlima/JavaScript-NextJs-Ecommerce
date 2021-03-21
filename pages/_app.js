import { Fragment, useEffect } from "react";

import Head from "next/head";

import { elementType, object } from "prop-types";

import { wrapper } from "../src/redux/store";

import Layout from "../src/components/Layout";
import ThemeProvider from "../src/components/Theme";

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
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

App.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
};

export default wrapper.withRedux(App);
