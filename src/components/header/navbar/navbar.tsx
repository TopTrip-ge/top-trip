import { FC } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { PATHS } from "enums/paths";
import { StyledLink } from "components/styled-link";

const NAVBAR_ITEMS = [
  <StyledLink to={PATHS.HOME}>Подбор тура</StyledLink>,
  <StyledLink to={PATHS.POPULAR_DESTINATIONS}>Популярные направления</StyledLink>,
];

export const Navbar: FC = () => (
  <Box sx={{ padding: "12px 0" }}>
    <Tabs component="nav" aria-label="nav tabs" sx={{ "[role='tablist']": { gap: 5 } }}>
      {NAVBAR_ITEMS.map((label) => (
        <Tab label={label} sx={{ p: 0, maxWidth: "100%" }} />
      ))}
    </Tabs>
  </Box>
);
