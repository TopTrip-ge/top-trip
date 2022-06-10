import { FC } from "react";
import { Header as AntHeader } from "antd/lib/layout/layout";
import { Container } from "components/container";
import { Navbar } from "./navbar";

export const Header: FC = () => (
  <AntHeader>
    <Container>
      <Navbar />
    </Container>
  </AntHeader>
);
