import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
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

  @media (max-width: ${({ theme: { devices } }) => devices.mobileL}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme: { devices } }) => devices.mobileM}) {
    font-size: 14px;
  }
`;
