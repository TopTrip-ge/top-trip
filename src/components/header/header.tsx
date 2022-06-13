import { FC } from "react";
import { Navbar } from "./navbar";
import { StyledHeader } from "./header-style";

export const Header: FC = () => (
  <StyledHeader>
    <Navbar />
  </StyledHeader>
);
