import { Box } from "@material-ui/core";

import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main" flex="1" maxWidth="1280px">
        {children}
      </Box>
    </>
  );
};

export default Layout;
