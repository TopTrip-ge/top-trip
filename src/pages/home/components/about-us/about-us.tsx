import { FC } from "react";
import uniqid from "uniqid";
import { Container, Grid, Typography } from "@mui/material";
import { Section } from "components/section";
import { CheckMark } from "./components";

const REASONS = [
  {
    reason: "Aute do id sint magna voluptate voluptate magna.",
    description: `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla 
    labore aliquip veniam duis magna quis laborum voluptate elit eiusmod.
    Proident deserunt ullamco anim incididunt fugiat.`,
  },
  {
    reason: "Aute do id sint magna voluptate voluptate magna.",
    description: `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla 
    labore aliquip veniam duis magna quis laborum voluptate elit eiusmod.
    Proident deserunt ullamco anim incididunt fugiat.`,
  },
  {
    reason: "Aute do id sint magna voluptate voluptate magna.",
    description: `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla 
    labore aliquip veniam duis magna quis laborum voluptate elit eiusmod.
    Proident deserunt ullamco anim incididunt fugiat.`,
  },
  {
    reason: "Aute do id sint magna voluptate voluptate magna.",
    description: `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla 
    labore aliquip veniam duis magna quis laborum voluptate elit eiusmod.
    Proident deserunt ullamco anim incididunt fugiat.`,
  },
  {
    reason: "Aute do id sint magna voluptate voluptate magna.",
    description: `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla 
    labore aliquip veniam duis magna quis laborum voluptate elit eiusmod.
    Proident deserunt ullamco anim incididunt fugiat.`,
  },
  {
    reason: "Aute do id sint magna voluptate voluptate magna.",
    description: `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla 
    labore aliquip veniam duis magna quis laborum voluptate elit eiusmod.
    Proident deserunt ullamco anim incididunt fugiat.`,
  },
];

export const AboutUs: FC = () => {
  return (
    <Section>
      <Container>
        <Typography component="h3" variant="h3" sx={{ my: 4, textAlign: "center" }}>
          О нас
        </Typography>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          {REASONS.map(({ reason, description }) => (
            <Grid item xs={9} sm={6} md={4} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                key={uniqid()}
                component="h5"
                variant="h5"
                sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "top" }}
              >
                <CheckMark marginTop="7px" />
                {reason}
              </Typography>
              <Typography key={uniqid()} component="p">
                {description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
