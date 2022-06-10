import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  font-size: 25px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  transition: all 0.2s;

  &:hover {
    color: #ff0000;
  }

  &.active {
    color: #ff0000;
  }
`;
