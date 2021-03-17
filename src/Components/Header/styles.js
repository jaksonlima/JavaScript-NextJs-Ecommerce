import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import { PersonOutline } from "@material-ui/icons";

export const PersonOutlineIcon = styled(PersonOutline)`
  font-size: 30px !important;
  border-radius: 50%;
  color: rgb(0 0 0 / 30%);
  background: linear-gradient(to right, #00c9ff, #92fe9d);
`;

export const IconButtonMUI = styled(IconButton)`
  padding: 0 !important;
`;
