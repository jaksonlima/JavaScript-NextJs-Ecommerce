import { Box } from "@material-ui/core";

import { ContainerMUI } from "./styles";

import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <ContainerMUI maxWidth="xl">
        <Header />
        <Box component="main">{children}</Box>
        <Box component="footer">footer</Box>
      </ContainerMUI>
    </>
  );
};

export default Layout;
