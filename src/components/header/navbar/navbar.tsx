import { StyledMenu, StyledNavLink } from "./navbar-style";

const MENU_ITEMS = [
  {
    label: <StyledNavLink to="/">Подбор тура</StyledNavLink>,
    key: "tour_selection",
  },
  {
    label: (
      <StyledNavLink to="/ready-trips">Популярные направления</StyledNavLink>
    ),
    key: "popular_destinations",
  },
];

export const Navbar = () => (
  <nav>
    <StyledMenu className="ant-menu-horizontal" items={MENU_ITEMS} />
  </nav>
);
