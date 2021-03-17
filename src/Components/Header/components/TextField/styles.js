import styled from "styled-components";

import { TextField } from "@material-ui/core";

export const TextFieldMUI = styled(TextField)`
  width: 100%;

  @media (max-width: 960px) {
    padding: 10px 0 10px !important;
  }
`;
