import { FC } from "react";
import { AppBar, Box, Container, MenuItem, Toolbar, Typography, Menu, Button, IconButton } from "@mui/material";
import uniqid from "uniqid";
import { PATHS } from "enums";
import { StyledLink } from "components/styled-link";
import { Icon } from "components/icon";
import { useNavbar } from "./hooks/use-navbar";

const NAVBAR_ITEMS = [
  <StyledLink to={PATHS.HOME}>Подбор тура</StyledLink>,
  <StyledLink to={PATHS.POPULAR_DESTINATIONS}>Популярные направления</StyledLink>,
];

export const Navbar: FC = () => {
  const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } = useNavbar();

  return (
    <AppBar position="static" sx={{ backgroundColor: "custom.white", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              name="IconButton"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Icon name="Menu" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                transform: { xs: "scale(0.5)", sm: "scale(0.7)" },
                mt: { xs: -24, sm: -8 },
                ml: { xs: -5, sm: -18 },
              }}
            >
              {NAVBAR_ITEMS.map((page) => (
                <MenuItem key={uniqid()} onClick={handleCloseNavMenu}>
                  <Typography sx={{ display: "flex", flexWrap: "wrap" }} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {NAVBAR_ITEMS.map((page) => (
              <Button
                key={uniqid()}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  backgroundColor: "custom.white",
                  "&:hover": { backgroundColor: "custom.white" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
