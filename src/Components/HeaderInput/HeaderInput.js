import { Paper, IconButton, InputBase, Box } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const HeaderInput = () => (
  <Box maxWidth="450px">
    <Paper>
      <Box display="flex" padding="0 0 0 10px" width="100%">
        <InputBase placeholder="Digite sua busca..." fullWidth />
        <IconButton aria-label="search">
          <Search />
        </IconButton>
      </Box>
    </Paper>
  </Box>
);

export default HeaderInput;
