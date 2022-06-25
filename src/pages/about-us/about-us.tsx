import { FC } from "react";
import uniqid from "uniqid";
import { Box, Container, Typography } from "@mui/material";
import { MainLayout } from "layouts/main";
import { Section } from "components/section";

const PARAGRAPHS = [
  `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla labore aliquip veniam
              duis magna quis laborum voluptate elit eiusmod. Proident deserunt ullamco anim incididunt fugiat.`,
  `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla labore aliquip veniam
              duis magna quis laborum voluptate elit eiusmod. Proident deserunt ullamco anim incididunt fugiat.`,
  `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla labore aliquip veniam
              duis magna quis laborum voluptate elit eiusmod. Proident deserunt ullamco anim incididunt fugiat.`,
  `Aliquip commodo fugiat occaecat mollit eu mollit veniam nisi non enim. Laboris nulla labore aliquip veniam
              duis magna quis laborum voluptate elit eiusmod. Proident deserunt ullamco anim incididunt fugiat.`,
];

export const AboutUs: FC = () => {
  return (
    <MainLayout>
      <Section>
        <Container>
          <Typography component="h3" variant="h3" sx={{ my: 4, textAlign: "center" }}>
            О нас
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {PARAGRAPHS.map((paragraph) => (
              <Typography key={uniqid()} component="p">
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Container>
      </Section>
    </MainLayout>
  );
};
