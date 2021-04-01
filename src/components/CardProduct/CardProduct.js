import Image from "next/image";

import { CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from "@material-ui/core";

import { CardMUI } from "./styles";

export default function MediaCard({ product }) {
  console.log(product);
  return (
    <CardMUI className=" CardMUI ">
      <CardActionArea className=" CardActionArea ">
        <Grid container direction="row" justify="center" alignItems="center">
          <CardMedia children={<Image src={product.image} width={145} height={145} />} />
          <CardContent>
            <Typography gutterBottom variant="body2" component="h5">
              {product.name}
            </Typography>
            <Typography variant="h6" component="span">
              {product.price}
            </Typography>
          </CardContent>
        </Grid>
      </CardActionArea>
      {/* <CardActions className=" CardActions ">
        <Button size="small">Comprar</Button>
      </CardActions> */}
    </CardMUI>
  );
}
