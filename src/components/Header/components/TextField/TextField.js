import { Grid, InputAdornment } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

import { TextFieldMUI } from "./styles";

function InputTextField() {
  return (
    <>
      <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
        <TextFieldMUI
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
    </>
  );
}

export default InputTextField;
