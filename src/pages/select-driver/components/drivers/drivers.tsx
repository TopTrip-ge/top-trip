import { FC } from "react";
import { Grid } from "@mui/material";
import { convertCurrency } from "utils";
import { drivers } from "./components/driver-card/driver-card-constants";
import { DriverCard } from "./components";
import { useDrivers } from "./drivers-hooks";

export const Drivers: FC = () => {
  const { currency } = useDrivers();
  return (
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      {drivers.map((driver) => (
        <Grid key={driver.id} item>
          <DriverCard driver={driver} price={convertCurrency(driver.price, currency)} />
        </Grid>
      ))}
    </Grid>
  );
};
