import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container, Grid, Typography } from "@mui/material";
import { Section } from "components/section";
import { setCurrencySign } from "utils";
import { LOCALIZATION_NAMESPACES } from "enums/localization";
import { DestinationCard } from "./components";
import { usePopularDestinations } from "./popular-destinations-hooks";

export const PopularDestinations: FC = () => {
  const { t } = useTranslation();
  const { destinations, findPrice, currency } = usePopularDestinations();

  return (
    <Section>
      <Container>
        <Typography sx={{ mb: 8, transform: { xs: "scale(0.8)" } }} align="center" variant="h3" component="h3">
          {t("title.popular-destinations", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
        </Typography>
        <Grid
          container
          sx={{ flexGrow: 1, justifyContent: { md: "space-between", xs: "center" } }}
          direction="row"
          spacing={{ xs: 2, sm: 4, md: 10 }}
          columns={{ xs: 4, sm: 9, md: 9 }}
        >
          {destinations.map(({ id, destinationsName, date, imageURL }) => (
            <Grid key={id} item xs={3}>
              <DestinationCard
                destinationsName={destinationsName}
                price={setCurrencySign(currency, findPrice(id))}
                date={date}
                imageURL={imageURL}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
