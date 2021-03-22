import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { MenuItem, ListItemIcon, ListItemText, Divider, IconButton } from "@material-ui/core";

import {
  WbSunny,
  Brightness2Outlined,
  ExitToApp,
  AssignmentIndOutlined,
  LocalMallOutlined,
  PersonOutline,
} from "@material-ui/icons";

import { THEMES } from "../../../../utils/constants";

import { MenuMUI, PersonOutlineIcon } from "./styles";

import { Creators as GlobalCreators } from "../../../../redux/reducers/global";

function Menu({ theme, themeSuccess }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTheme = () => {
    const currentTheme = THEMES.LIGHT === theme ? THEMES.DARK : THEMES.LIGHT;

    themeSuccess({ theme: currentTheme });
  };

  return (
    <>
      <IconButton aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
        <PersonOutlineIcon />
      </IconButton>
      <MenuMUI
        disableScrollLock
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        getContentAnchorEl={null}
        id="customized-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <AssignmentIndOutlined />
          </ListItemIcon>
          <ListItemText primary="Pedidos" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalMallOutlined />
          </ListItemIcon>
          <ListItemText primary="Carrinho" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonOutline />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </MenuItem>
        <MenuItem onClick={handleTheme}>
          <ListItemIcon>{THEMES.LIGHT === theme ? <WbSunny /> : <Brightness2Outlined />}</ListItemIcon>
          <ListItemText primary={`Aparência: ${theme}`} />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </MenuItem>
      </MenuMUI>
    </>
  );
}

const mapStateToProps = ({ global }) => ({ theme: global.getIn(["theme"]) });

const mapDispatchToProps = (dispatch) => bindActionCreators({ themeSuccess: GlobalCreators.themeSuccess }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
