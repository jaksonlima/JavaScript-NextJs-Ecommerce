import { connect } from "react-redux";

import CssBaselineMaterial from "@material-ui/core/CssBaseline";
import { ThemeProvider as ThemeProviderMaterial } from "@material-ui/core/styles";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { themeCurrentCookie } from "../../utils/cookie";
import { createTheme } from "../../styles/theme";
import { GlobalStyleStyled } from "../../styles/globalStyle";

function ThemeProvider({ children, typeTheme }) {
  const theme = createTheme(themeCurrentCookie(typeTheme));

  return (
    <ThemeProviderStyled theme={theme}>
      <ThemeProviderMaterial theme={theme}>
        <GlobalStyleStyled />
        <CssBaselineMaterial />
        {children}
      </ThemeProviderMaterial>
    </ThemeProviderStyled>
  );
}

const mapStateToProps = ({ global }) => ({ typeTheme: global.getIn(["theme", "type"]) });

export default connect(mapStateToProps)(ThemeProvider);
