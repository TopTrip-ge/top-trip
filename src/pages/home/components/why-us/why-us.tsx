import { FC } from "react";
import { CardContent, Container, Grid, Typography } from "@mui/material";
import uniqid from "uniqid";
import { Icon } from "components/icon";
import { Section } from "components/section";
import { useTranslation } from "react-i18next";
import { LOCALIZATION_NAMESPACES } from "enums/localization";
import { Card as CardInfo } from "./why-us-interfaces";

const CARDS: CardInfo[] = [
  {
    icon: "SearchOutlined",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis magna sodales, posuere.",
  },
  {
    icon: "SentimentSatisfiedAltOutlined",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis magna sodales, posuere.",
  },
  {
    icon: "CheckOutlined",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis magna sodales, posuere.",
  },
];

export const WhyUs: FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Typography sx={{ fontSize: { xs: "28px", md: "50px" }, mb: 5 }} variant="h3" align="center">
          {t("title.why-us", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
        </Typography>
        <Grid
          container
          sx={{ flexGrow: 1, justifyContent: { md: "space-between", xs: "center" } }}
          direction="row"
          spacing={{ xs: 2, sm: 4, md: 10 }}
          columns={{ xs: 4, sm: 9, md: 9 }}
        >
          {CARDS.map(({ description, icon, title }) => (
            <Grid item key={uniqid()} sx={{ maxWidth: "350px", boxShadow: "none" }}>
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 0 }}>
                <Icon name={icon} fontSize="large" />
                <Typography fontWeight="fontWeightBold" variant="h5" sx={{ mt: 1 }}>
                  {title}
                </Typography>
                <Typography fontWeight="fontWeightMedium" variant="subtitle1" align="center" sx={{ mt: 2 }}>
                  {description}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
