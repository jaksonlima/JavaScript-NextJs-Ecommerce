import styled from "styled-components";

import { Card } from "@material-ui/core";

export const CardMUI = styled(Card)`
  width: 252px;
  height: 399px;

  padding: 20px;

  transition: all 0.2s ease-out !important;

  &:hover,
  &:focus,
  &:active {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);

    box-shadow: rgba(0 0 0 / 40%) 0px 3px 6px !important;
  }
`;
