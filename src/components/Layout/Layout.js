import { Box } from "@material-ui/core";

import Header from "../Header";
import ContainerMUI from "../Container";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContainerMUI>
        <Box component="main">{children}</Box>
        <Box component="footer">footer</Box>
      </ContainerMUI>
    </>
  );
};

export default Layout;
