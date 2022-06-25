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
        <Typography
          component="h3"
          variant="h3"
          sx={{ my: 4, textAlign: "center", fontSize: { xs: "40px", sm: "50px" } }}
        >
          О нас
        </Typography>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          {REASONS.map(({ reason, description }) => (
            <Grid
              key={uniqid()}
              item
              xs={9}
              sm={6}
              md={4}
              sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}
            >
              <CheckMark marginTop="7px" displayXs="flex" displaySm="none" />
              <Typography
                key={uniqid()}
                component="h5"
                variant="h5"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "top",
                  fontSize: { xs: "16px", sm: "20px", md: "24px" },
                }}
              >
                <CheckMark marginTop="7px" displayXs="none" displaySm="flex" />
                {reason}
              </Typography>
              <Typography key={uniqid()} component="p" sx={{ fontSize: { xs: "10px", sm: "16px", md: "20px" } }}>
                {description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
