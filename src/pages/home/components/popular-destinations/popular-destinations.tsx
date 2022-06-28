import { FC } from "react";
import { useRecoilValue } from "recoil";
import { popularDestinationsSelector, currencyStateSelector } from "recoil/selectors";
import { Container, Grid, Typography } from "@mui/material";
import { Section } from "components/section";
import { setCurrencySign } from "utils";
import { useTranslation } from "react-i18next";
import { LOCALIZATION_NAMESPACES } from "enums/localization";
import { DestinationCard } from "./components";
import { usePopularDestinations } from "./popular-destinations-hooks";

export const PopularDestinations: FC = () => {
  const { t } = useTranslation();
  const popularDestination = usePopularDestinations();
  const prices = useRecoilValue(popularDestinationsSelector);
  const currency = useRecoilValue(currencyStateSelector);

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
          {popularDestination.map(({ id, destinationsName, date, imageURL }, index) => (
            <Grid key={id} item xs={3}>
              <DestinationCard
                destinationsName={destinationsName}
                price={setCurrencySign(currency, prices[index])}
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
