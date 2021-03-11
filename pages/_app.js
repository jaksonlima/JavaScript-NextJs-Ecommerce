import { wrapper } from "../src/redux/store";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
