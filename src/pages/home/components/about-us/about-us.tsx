import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, Box } from "@mui/material";
import uniqid from "uniqid";
import { Section } from "components/section";
import { LOCALIZATION_NAMESPACES } from "enums";

export const AboutUs: FC = () => {
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.HOME_SECTIONS);

  return (
    <Section>
      <Container>
        <Typography
          component="h3"
          variant="h3"
          sx={{ my: 4, textAlign: "center", fontSize: { xs: "40px", sm: "50px" } }}
        >
          {t("title.about-us", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {(t("about-us") as string[]).map((item) => (
            <Typography key={uniqid()} component="p" sx={{ textIndent: "20px" }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Container>
    </Section>
  );
};
