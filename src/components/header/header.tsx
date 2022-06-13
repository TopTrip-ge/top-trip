import { Container } from "components/container";
import { FC } from "react";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <Container elementType="header">
    <Navbar />
  </Container>
);
