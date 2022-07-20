import { FC } from "react";
import { Container } from "@mui/material";
import { MainLayout } from "layouts/main";
import { Section } from "components/section";
import { Drivers } from "./components/drivers/drivers";

export const SelectDriver: FC = () => (
  <MainLayout>
    <Section>
      <Container>
        <Drivers />
      </Container>
    </Section>
  </MainLayout>
);
