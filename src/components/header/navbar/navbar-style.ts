import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled(Menu)`
  display: flex;
  list-style-type: none;
  grid-gap: 32px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.black};
  transition: all 0.2s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }

  &.active {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
