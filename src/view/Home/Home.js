import { connect } from "react-redux";

function Home({ products }) {
  return (
    <>
      {products &&
        products.map((product) => (
          <>
            <div key={product.id}>
              <strong>{product.name}</strong>
              <strong>{product.price}</strong>
              <p>{product.description}</p>
            </div>
          </>
        ))}
    </>
  );
}

const mapStateToProps = ({ product }) => ({ products: product.getIn(["products"]) });

export default connect(mapStateToProps)(Home);
