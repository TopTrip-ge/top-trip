import { FC } from "react";
import { AppBar, Container } from "@mui/material";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <AppBar position="sticky" sx={{ backgroundColor: "custom.white" }} component="header">
    <Container>
      <Navbar />
    </Container>
  </AppBar>
);
