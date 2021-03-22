import Head from "next/head";
import { END } from "@redux-saga/core";

import { wrapper } from "../src/redux/store";
import { Creators } from "../src/redux/reducers/product";

import Home from "../src/view/Home";

function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(Creators.productRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Index;
