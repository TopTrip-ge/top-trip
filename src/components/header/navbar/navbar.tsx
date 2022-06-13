import { PATHS } from "enums/paths";
import { StyledNavBar, StyledNavLink } from "./navbar-style";

export const Navbar = () => (
  <StyledNavBar>
    <StyledNavLink to={PATHS.HOME}>Подбор тура</StyledNavLink>
    <StyledNavLink to={PATHS.POPULAR_DESTINATIONS}>Популярные направления</StyledNavLink>
  </StyledNavBar>
);
