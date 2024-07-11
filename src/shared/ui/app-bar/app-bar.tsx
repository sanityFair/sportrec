import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import { Logo } from "../logo";

export const AppBar = () => (
  <MuiAppBar position="sticky" color="inherit">
    <Container maxWidth="lg">
      <Box py={2}>
        <Logo />
      </Box>
    </Container>
  </MuiAppBar>
);
