import { FC } from "react";
import { AppBar, Container, Box } from "@mui/material";
import { LanguageSwitcher } from "components/language-switcher";
import { CenterBox } from "components/center-box";
import { CurrencySwitcher } from "components/currency-switcher";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <AppBar position="sticky" sx={{ backgroundColor: "custom.white" }} component="header">
    <Container>
      <CenterBox sx={{ justifyContent: "space-between" }}>
        <Navbar />
        <Box sx={{ display: "flex", gap: 2 }}>
          <CurrencySwitcher />
          <LanguageSwitcher />
        </Box>
      </CenterBox>
    </Container>
  </AppBar>
);
