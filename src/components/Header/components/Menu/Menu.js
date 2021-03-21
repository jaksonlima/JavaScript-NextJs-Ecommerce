import { useState } from "react";
import { connect } from "react-redux";

import { Box, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { WbSunny, Brightness2Outlined } from "@material-ui/icons";

import { THEMES } from "../../../../utils/constants";

import { MenuMUI, IconButtonMUI, PersonOutlineIcon } from "./styles";

function Menu({ typeTheme }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButtonMUI aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
        <PersonOutlineIcon />
      </IconButtonMUI>
      <MenuMUI
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        getContentAnchorEl={null}
        id="customized-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        <Box width={298}>
          <MenuItem>
            <ListItemIcon>
              {THEMES.LIGHT === typeTheme ? <WbSunny fontSize="small" /> : <Brightness2Outlined fontSize="small" />}
            </ListItemIcon>
            <ListItemText primary={`Aparência: ${typeTheme}`} />
          </MenuItem>
        </Box>
      </MenuMUI>
    </>
  );
}

const mapStateToProps = ({ global }) => ({ typeTheme: global.getIn(["theme", "type"]) });

export default connect(mapStateToProps)(Menu);
