import Head from "next/head";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators } from "../src/redux/reducers/home";

function Home({ image, carouselRequest }) {
  carouselRequest({ dispatch: "saga home" });
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>aa</h1>
    </>
  );
}

const mapStateToProps = ({ home }) => ({
  image: home.getIn(["imagesCarousel"], []),
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ carouselRequest: Creators.carouselRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
