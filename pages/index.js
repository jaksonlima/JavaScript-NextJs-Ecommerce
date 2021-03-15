import Head from "next/head";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators } from "../src/redux/reducers/home";

function Home({ image, carouselRequest, users }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {users &&
          users.map((item, index) => (
            <li key={index}>
              <div>
                <h2>#{item.id}</h2>
                <h3>Nome: {item.name}</h3>
                <h3>Username: {item.username}</h3>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

Home.getInitialProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    users,
  };
};

const mapStateToProps = ({ home }) => ({
  image: home.getIn(["imagesCarousel"], []),
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ carouselRequest: Creators.carouselRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
