import { FC } from "react";
import { Box, MenuItem, Toolbar, Menu, Button, IconButton } from "@mui/material";
import uniqid from "uniqid";
import { PATHS } from "enums";
import { Icon } from "components/icon";
import { StyledLink } from "components/styled-link";
import { useNavbar } from "./hooks/use-navbar";

const NAVBAR_ITEMS = [<StyledLink to={PATHS.HOME}>Подбор тура</StyledLink>];

export const Navbar: FC = () => {
  const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } = useNavbar();

  return (
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ p: 0 }}
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
          }}
        >
          {NAVBAR_ITEMS.map((page) => (
            <MenuItem key={uniqid()} onClick={handleCloseNavMenu}>
              {page}
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
              color: "custom.white",
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
  );
};
