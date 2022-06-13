import { PATHS } from "enums/paths";
import { StyledNav, StyledNavLink } from "./navbar-style";

export const Navbar = () => (
  <StyledNav>
    <StyledNavLink to={PATHS.HOME}>Подбор тура</StyledNavLink>
    <StyledNavLink to={PATHS.POPULAR_DESTINATIONS}>Популярные направления</StyledNavLink>
  </StyledNav>
);
