import { FC } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { StyledNavLink } from "./navbar-style";
import { PATHS } from "enums/paths";

const NAVBAR_ITEMS = [
  <StyledNavLink to={PATHS.HOME}>Подбор тура</StyledNavLink>,
  <StyledNavLink to={PATHS.POPULAR_DESTINATIONS}>
    Популярные направления
  </StyledNavLink>,
];

export const Navbar: FC = () => (
  <Box sx={{ padding: "12px 0" }}>
    <Tabs
      component="nav"
      aria-label="nav tabs"
      sx={{ "[role='tablist']": { gap: 5 } }}
    >
      {NAVBAR_ITEMS.map((label) => (
        <Tab label={label} sx={{ p: 0, maxWidth: "100%" }} />
      ))}
    </Tabs>
  </Box>
);
