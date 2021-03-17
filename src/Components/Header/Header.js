import Image from "next/image";

import { AppBar, Grid, Hidden, Toolbar } from "@material-ui/core";

import TextFieldMUI from "./components/TextField";

import { PersonOutlineIcon, IconButtonMUI } from "./styles";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.boxShadow =
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)";
      } else {
        document.getElementById("navbar").style.boxShadow = "unset";
      }
    }
  }, []);

  return (
    <AppBar id="navbar" position="sticky" color="primary">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Image src="/logo1.png" alt="logo" width={50} height={50} />
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
