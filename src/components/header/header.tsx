import { FC } from "react";
import { Menu } from "antd";
import { StyledNavLink } from "./header-style";

const items = [
  { label: <StyledNavLink to="/">Подбор тура</StyledNavLink>, key: "item-1" },
  { label: <StyledNavLink to="/ready-trips">Популярные направления</StyledNavLink>, key: "item-2" },
];

export const Header: FC = () => {
  return <Menu items={items} mode="horizontal" />;
};
