import Head from "next/head";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { Creators } from "../src/redux/reducers/home";

const H2 = styled.div`
  color: ${(props) => {
    return "red";
  }};
`;

function Home({ image, carouselRequest }) {
  carouselRequest({ dispatch: "saga home" });
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <H2>aa</H2>
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
