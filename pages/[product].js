import Head from "next/head";
import { END } from "@redux-saga/core";

import { wrapper } from "../src/redux/store";
import { Creators } from "../src/redux/reducers/product";

function Index() {
  return (
    <>
      <Head>
        <title>Produto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {new Date().toISOString(0)}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(Creators.productRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();

  return {
    props: {},
    revalidate: 10,
  };
});

export default Index;
