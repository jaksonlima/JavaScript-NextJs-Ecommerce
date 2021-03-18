import { useEffect } from "react";

import Image from "next/image";

import { AppBar, Box, Grid, Hidden, Toolbar } from "@material-ui/core";

import TextFieldMUI from "./components/TextField";

import { PersonOutlineIcon, IconButtonMUI } from "./styles";

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
    <AppBar title="My lima" position="sticky">
      <Toolbar variant="dense">
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
            <IconButtonMUI aria-label="user">
              <PersonOutlineIcon />
            </IconButtonMUI>
          </Grid>
          <Hidden mdUp>
            <TextFieldMUI />
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
