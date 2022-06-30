import { FC } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import uniqid from "uniqid";
import { Icon } from "components/icon";
import { Section } from "components/section";
import { LOCALIZATION_NAMESPACES } from "enums";
import { ICON_NAMES } from "./why-us-constants";

export const WhyUs: FC = () => {
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.HOME_SECTIONS);

  return (
    <Section>
      <Container>
        <Typography sx={{ fontSize: { xs: "28px", md: "50px" }, mb: 5 }} variant="h3" align="center">
          {t("title.why-us", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
        </Typography>
        <Grid
          container
          sx={{ flexGrow: 1, justifyContent: { md: "space-evenly", xs: "left" }, gap: 3 }}
          direction="row"
          columns={{ xs: 2, sm: 9, md: 12 }}
        >
          {(t("why-us") as string[]).map((item, index) => (
            <Grid item xs={4} key={uniqid()}>
              <Typography
                component="p"
                sx={{ display: "flex", flexDirection: "row", alignItems: "top", fontWeight: "fontWeightBold", gap: 1 }}
              >
                <Icon name={ICON_NAMES[index]} />
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
