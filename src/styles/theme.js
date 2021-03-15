import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Crie uma instância de tema.
export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#000000",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: "#e5e6f029",
      },
    },
  })
);

console.log(theme);
