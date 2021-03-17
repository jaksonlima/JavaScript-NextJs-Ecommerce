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
        main: "#000",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: "#fff",
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  })
);
