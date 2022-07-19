import { FC, ReactNode } from "react";
import { Box, Typography, Button } from "@mui/material";
import { LANGUAGES } from "enums";
import { Icon } from "components/icon";
import { Drivers } from "./driver-card-interfaces";

type Props = Omit<Drivers, "id"> & { price: string; t: (value: string) => ReactNode; lang: LANGUAGES };

export const DriverCard: FC<Props> = ({
  carImage,
  name,
  language,
  carName,
  passengerSeats,
  luggageAmount,
  fuel,
  freeWiFi,
  animalsTransportation,
  price,
  t,
  lang,
}) => {
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "270px",
          height: "180px",
          backgroundImage: `url(${carImage})`,
          backgroundSize: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, p: 1 }}>
        <Icon name="AccountCircle" sx={{ color: "custom.orange", width: "36px", height: "36px" }} />
        <Box>
          <Typography sx={{ fontWeight: "fontWeightBold", fontSize: "14px" }}>
            {lang === LANGUAGES.RU ? name.ruName : name.enName}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {lang === LANGUAGES.RU ? language.ruLanguage.join(", ") : language.enLanguage.join(", ")}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, p: 1 }}>
        <Icon name="DirectionsCar" sx={{ color: "custom.orange" }} />
        <Typography sx={{ fontSize: "14px", fontWeight: "fontWeightBold" }}>{carName}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Icon name="AirlineSeatReclineNormal" sx={{ color: "custom.orange", transform: "scale(-1, 1)" }} />
            <Typography sx={{ fontSize: "14px" }}>{passengerSeats}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Icon name="Luggage" sx={{ color: "custom.orange" }} />
            <Typography sx={{ fontSize: "14px" }}>{luggageAmount}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Icon name="LocalGasStation" sx={{ color: "custom.orange" }} />
            <Typography sx={{ fontSize: "14px" }}>{lang === LANGUAGES.RU ? fuel.ruFuel : fuel.enFuel}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px" }}>
          <Icon name="NetworkWifiOutlined" sx={{ color: freeWiFi ? "custom.orange" : "custom.grey" }} />
          <Icon name="Pets" sx={{ color: animalsTransportation ? "custom.orange" : "custom.grey" }} />
        </Box>
      </Box>
      <Box sx={{ height: "1px", width: "100%", backgroundColor: "custom.lightGrey" }} />
      <Box sx={{ display: "flex", flexDirection: "row", p: 1, gap: 1, alignItems: "center" }}>
        <Typography sx={{ fontSize: "14px" }}>{t("car-price")}</Typography>
        <Typography sx={{ fontWeight: "fontWeightBold" }}>{price}</Typography>
      </Box>
      <Button sx={{ m: 1 }}>{t("button.reserve")}</Button>
    </Box>
  );
};
