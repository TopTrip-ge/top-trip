import { PATHS } from "enums/paths";
import { StyledMenu, StyledNavLink } from "./navbar-style";

const MENU_ITEMS = [
  {
    label: <StyledNavLink to={PATHS.HOME}>Подбор тура</StyledNavLink>,
    key: "tour_selection",
  },
  {
    label: <StyledNavLink to={PATHS.POPULAR_DESTINATIONS}>Популярные направления</StyledNavLink>,
    key: "popular_destinations",
  },
];

export const Navbar = () => (
  <nav>
    <StyledMenu items={MENU_ITEMS} />
  </nav>
);
