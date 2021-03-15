import Image from "next/image";

import { AppBar, Grid, IconButton, InputAdornment, Toolbar, Box } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

import { InputTextField, PersonOutlineIcon } from "./styles";

function Header() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Image src="/logo1.png" alt="logo" width={50} height={50} />
          </Grid>
          <Grid item>
            <InputTextField
              id="search"
              placeholder="Procure por nome, código."
              type="search"
              variant="outlined"
              color="secondary"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <IconButton aria-label="user">
              <PersonOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
