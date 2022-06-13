import { FC } from "react";
import { Box } from "@mui/material";
import { Container } from "components/container";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <Box component="header">
    <Container>
      <Navbar />
    </Container>
  </Box>
);
