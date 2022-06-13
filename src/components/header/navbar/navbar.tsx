import { FC } from "react";
import { Box, Tabs } from "@mui/material";
import { StyledNavLink } from "./navbar-style";
import { PATHS } from "enums/paths";

export const Navbar: FC = () => (
  <Box sx={{ padding: "12px 0" }}>
    <Tabs sx={{ gap: "12px" }} aria-label="nav tabs example">
      <StyledNavLink to={PATHS.HOME}>Подбор тура</StyledNavLink>
      <StyledNavLink to={PATHS.POPULAR_DESTINATIONS}>Популярные направления</StyledNavLink>
    </Tabs>
  </Box>
);
