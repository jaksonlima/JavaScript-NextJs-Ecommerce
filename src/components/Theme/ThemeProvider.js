import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CssBaselineMaterial from "@material-ui/core/CssBaseline";
import { ThemeProvider as ThemeProviderMaterial } from "@material-ui/core/styles";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { Creators as GlobalCreators } from "../../redux/reducers/global";

import { GlobalStyleStyled } from "../../styles/globalStyle";

import { createTheme } from "../../styles/theme";
import { get, set } from "../../utils/cookie";

import { COOKIE } from "../../utils/constants";

function ThemeProvider({ children, theme, themeSuccess }) {
  const [currentTheme, setCurrentTheme] = useState(createTheme());

  useEffect(() => {
    const themeCookie = get({ name: COOKIE.THEME });

    if (themeCookie && theme !== themeCookie) {
      themeSuccess({ theme: themeCookie });
    }
  }, []);

  useEffect(() => {
    if (theme) {
      set({ name: COOKIE.THEME, value: theme });
      setCurrentTheme(createTheme(theme));
    }
  }, [theme]);

  return (
    <ThemeProviderStyled theme={currentTheme}>
      <ThemeProviderMaterial theme={currentTheme}>
        <GlobalStyleStyled />
        <CssBaselineMaterial />
        {children}
      </ThemeProviderMaterial>
    </ThemeProviderStyled>
  );
}

const mapStateToProps = ({ global }) => ({ theme: global.getIn(["theme"]) });

const mapDispatchToProps = (dispatch) => bindActionCreators({ themeSuccess: GlobalCreators.themeSuccess }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThemeProvider);
