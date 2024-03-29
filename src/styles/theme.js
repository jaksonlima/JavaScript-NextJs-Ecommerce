import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { THEMES } from "../utils/constants";

const colors = {
  primary: {
    light: "#fafafa",
    dark: "#1A202C",
  },
  secondary: {
    light: "#1f5fb2",
    dark: "#2d88ff",
  },
  neutral: {
    light: "#f2f2f7",
    dark: "#3a3a3a",
  },
  background: {
    light: "#fafafa",
    dark: "#1A202C",
  },
  paper: {
    light: "#fafafa",
    dark: "#2D3748",
  },
  text: {
    light: "#ffffff",
    dark: "#404040",
  },
};

export const createTheme = (type = THEMES.LIGHT) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: {
        type,
        primary: {
          main: colors.primary[type],
          contrastText: colors.text[type],
        },
        secondary: {
          main: colors.secondary[type],
          contrastText: colors.text[type],
        },
        neutral: {
          main: colors.neutral[type],
        },
        background: {
          default: colors.background[type],
          paper: colors.paper[type],
        },
      },
      overrides: {
        MuiToolbar: {
          dense: {
            minHeight: "88px",
          },
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
