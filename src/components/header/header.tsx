import { FC } from "react";
import { Box, Container } from "@mui/material";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <Box component="header">
    <Container>
      <Navbar />
    </Container>
  </Box>
);
