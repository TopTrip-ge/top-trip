import { FC } from "react";
import { AppBar, Container } from "@mui/material";
import { LanguageSwitcher } from "components/language-switcher";
import { CenterBox } from "components/center-box";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <AppBar position="sticky" sx={{ backgroundColor: "custom.white" }} component="header">
    <Container>
      <CenterBox sx={{ justifyContent: "space-between" }}>
        <Navbar />
        <LanguageSwitcher />
      </CenterBox>
    </Container>
  </AppBar>
);
