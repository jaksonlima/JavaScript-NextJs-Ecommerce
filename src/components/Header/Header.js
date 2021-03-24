import { useEffect } from "react";

import Image from "next/image";

import { AppBar, Box, Grid, Hidden, Toolbar } from "@material-ui/core";

import ContainerMUI from "../Container";

import TextFieldMUI from "./components/TextField";
import Menu from "./components/Menu";

function Header() {
  useEffect(() => {
    window.onscroll = function hasBoxShadow() {
      const hasAppBar = document.querySelector(".MuiAppBar-root");

      if ((hasAppBar && document.body.scrollTop > 20) || document.documentElement.scrollTop > 20) {
        hasAppBar.style.boxShadow = "";
      } else {
        hasAppBar.style.boxShadow = "unset";
      }
    };
  }, []);

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <ContainerMUI>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Box mt={1}>
                <Image src="/logo1.png" alt="logo" width={50} height={50} />
              </Box>
            </Grid>
            <Hidden smDown>
              <TextFieldMUI />
            </Hidden>
            <Grid item>
              <Menu />
            </Grid>
            <Hidden mdUp>
              <TextFieldMUI />
            </Hidden>
          </Grid>
        </ContainerMUI>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
