import styled from "styled-components";

import { Button, Card, CardActions } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";

export const ButtonMUI = styled(Button)`
  padding: unset !important;

  transition: all 0.2s ease-out !important;

  &:hover,
  &:focus,
  &:active {
    -webkit-transform: translateY(-8px) !important;
    transform: translateY(-8px) !important;

    box-shadow: rgba(0 0 0 / 40%) 0px 3px 6px !important;
  }
`;

export const CardMUI = styled(Card)`
  width: 250px;
  height: 399px;

  padding: 20px;
`;

export const FavoriteBorderIconMUI = styled(FavoriteBorder)`
  color: #5b898a;

  transition: all 0.2s ease-out !important;

  &:hover,
  &:focus,
  &:active {
    color: red;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
`;

export const CardActionsMUI = styled(CardActions)`
  justify-content: flex-end;
`;
