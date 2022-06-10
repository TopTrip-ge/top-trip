import { FC } from "react";
import { Container } from "components/container";
import { Navbar } from "./navbar";
import { StyledAntHeader } from "./header-style";

export const Header: FC = () => (
  <StyledAntHeader>
    <Container>
      <Navbar />
    </Container>
  </StyledAntHeader>
);
