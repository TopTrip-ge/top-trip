import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Button } from "@mui/material";
import { LANGUAGES } from "enums";
import { Icon } from "components/icon";
import { CenterBox } from "components/center-box";
import { Driver } from "./driver-card-interfaces";

interface Props {
  driver: Omit<Driver, "id">;
  price: string;
}

export const DriverCard: FC<Props> = ({ driver, price }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
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
          backgroundImage: `url(${driver.carImage})`,
          backgroundSize: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
      <CenterBox sx={{ flexDirection: "row", justifyContent: "left", gap: 1, p: 1 }}>
        <Icon name="AccountCircle" sx={{ color: "custom.orange", width: "36px", height: "36px" }} />
        <Box>
          <Typography sx={{ fontWeight: "fontWeightBold", fontSize: "14px" }}>
            {lang === LANGUAGES.RU ? driver.name.ruName : driver.name.enName}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {lang === LANGUAGES.RU ? driver.language.ruLanguage.join(", ") : driver.language.enLanguage.join(", ")}
          </Typography>
        </Box>
      </CenterBox>
      <CenterBox sx={{ flexDirection: "row", justifyContent: "left", gap: 1, p: 1 }}>
        <Icon name="DirectionsCar" sx={{ color: "custom.orange" }} />
        <Typography sx={{ fontSize: "14px", fontWeight: "fontWeightBold" }}>{driver.carName}</Typography>
      </CenterBox>
      <CenterBox sx={{ flexDirection: "row", justifyContent: "space-between", p: 1 }}>
        <CenterBox sx={{ justifyContent: "left", gap: 1 }}>
          <CenterBox sx={{ justifyContent: "left", flexDirection: "row" }}>
            <Icon name="AirlineSeatReclineNormal" sx={{ color: "custom.orange", transform: "scale(-1, 1)" }} />
            <Typography sx={{ fontSize: "14px" }}>{driver.passengerSeats}</Typography>
          </CenterBox>
          <CenterBox sx={{ justifyContent: "left", flexDirection: "row" }}>
            <Icon name="Luggage" sx={{ color: "custom.orange" }} />
            <Typography sx={{ fontSize: "14px" }}>{driver.luggageAmount}</Typography>
          </CenterBox>
          <CenterBox sx={{ justifyContent: "left", flexDirection: "row" }}>
            <Icon name="LocalGasStation" sx={{ color: "custom.orange" }} />
            <Typography sx={{ fontSize: "14px" }}>
              {lang === LANGUAGES.RU ? driver.fuel.ruFuel : driver.fuel.enFuel}
            </Typography>
          </CenterBox>
        </CenterBox>
        <CenterBox sx={{ flexDirection: "row", justifyContent: "left", gap: "4px" }}>
          <Icon name="NetworkWifiOutlined" sx={{ color: driver.freeWiFi ? "custom.orange" : "custom.grey" }} />
          <Icon name="Pets" sx={{ color: driver.animalsTransportation ? "custom.orange" : "custom.grey" }} />
        </CenterBox>
      </CenterBox>
      <Box sx={{ height: "1px", width: "100%", backgroundColor: "custom.lightGrey" }} />
      <CenterBox sx={{ justifyContent: "left", flexDirection: "row", p: 1, gap: 1 }}>
        <Typography sx={{ fontSize: "14px" }}>{t("car-price")}</Typography>
        <Typography sx={{ fontWeight: "fontWeightBold" }}>{price}</Typography>
      </CenterBox>
      <Button sx={{ m: 1 }}>{t("button.reserve")}</Button>
    </Box>
  );
};
