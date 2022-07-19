import { FC } from "react";
import { Grid } from "@mui/material";
import { LANGUAGES, DRIVER_IDS } from "enums";
import { setCurrencySign } from "utils/set-currency-sign";
import { drivers } from "./components/driver-card/driver-card-constants";
import { DriverCard } from "./components";
import { useDriver } from "./driver-hooks";

export const Drivers: FC = () => {
  const { t, i18n, currency, findDriverPrice } = useDriver();
  return (
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      {drivers.map(
        ({
          id,
          carImage,
          name,
          language,
          carName,
          passengerSeats,
          luggageAmount,
          fuel,
          freeWiFi,
          animalsTransportation,
        }) => (
          <Grid key={id} item>
            <DriverCard
              carImage={carImage}
              name={name}
              language={language}
              carName={carName}
              passengerSeats={passengerSeats}
              luggageAmount={luggageAmount}
              fuel={fuel}
              freeWiFi={freeWiFi}
              animalsTransportation={animalsTransportation}
              t={t}
              lang={i18n.language as LANGUAGES}
              price={setCurrencySign(currency, findDriverPrice(id as DRIVER_IDS))}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};
