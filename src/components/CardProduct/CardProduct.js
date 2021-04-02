import Image from "next/image";

import { CardContent, CardMedia, Typography, Grid, Box } from "@material-ui/core";

import { CardMUI, CardActionsMUI, FavoriteBorderIconMUI } from "./styles";

import { moeda } from "../../utils/formater";

export default function MediaCard({ product }) {
  // console.log(product);
  return (
    <Box m={1}>
      <CardMUI>
        <CardActionsMUI>
          <FavoriteBorderIconMUI fontSize="small" />
        </CardActionsMUI>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <CardMedia children={<Image src={product.image} width={145} height={145} />} />
          </Grid>
          <Grid item>
            <CardContent>
              <Typography gutterBottom variant="body2" component="h5">
                {product.name}
              </Typography>
              <Typography variant="h6" component="span">
                {moeda(product.price)}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardMUI>
    </Box>
  );
}
