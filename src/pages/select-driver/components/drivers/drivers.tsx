import { FC } from "react";
import { Grid } from "@mui/material";
import { DRIVER_IDS } from "enums";
import { setCurrencySign } from "utils/set-currency-sign";
import { drivers } from "./components/driver-card/driver-card-constants";
import { DriverCard } from "./components";
import { useDrivers } from "./drivers-hooks";

export const Drivers: FC = () => {
  const { currency, findDriverPrice } = useDrivers();
  return (
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      {drivers.map((driver) => (
        <Grid key={driver.id} item>
          <DriverCard driver={driver} price={setCurrencySign(currency, findDriverPrice(driver.id as DRIVER_IDS))} />
        </Grid>
      ))}
    </Grid>
  );
};
