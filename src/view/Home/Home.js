import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import ProductCard from "../../components/ProductCard";

function Home({ products }) {
  return (
    <Grid container direction="row" justify="center" alignItems="stretch">
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
    </Grid>
  );
}

const mapStateToProps = ({ product }) => ({ products: product.getIn(["products"]) });

export default connect(mapStateToProps)(Home);
