/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { Typography, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { CURRENCIES } from "enums";
import { currencyState, popularDestinations } from "recoil/atoms";
import { convertCurrency } from "utils/convert-currency";
import { CURRENCY_SWITCHER_LABEL_ID, CURRENCY_SWITCHER_ID } from "./currency-switcher-constants";

const CURRENCY_ITEM = [
  {
    label: <Typography>{CURRENCIES.EUR}</Typography>,
    value: CURRENCIES.EUR,
  },
  {
    label: <Typography>{CURRENCIES.GEL}</Typography>,
    value: CURRENCIES.GEL,
  },
  {
    label: <Typography>{CURRENCIES.RUB}</Typography>,
    value: CURRENCIES.RUB,
  },
  {
    label: <Typography>{CURRENCIES.USD}</Typography>,
    value: CURRENCIES.USD,
  },
];

export const CurrencySwitcher: FC = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [destinationPrices, setDestinationPrices] = useRecoilState(popularDestinations);
  const { t } = useTranslation();

  const handleChange = ({ target: { value } }: SelectChangeEvent<CURRENCIES>) => {
    const convertedPrices: number[] = [];
    destinationPrices.map((price) =>
      convertCurrency(price, currency, value).then((data: number) => convertedPrices.push(Math.round(data)))
    );
    console.log(destinationPrices, convertedPrices.length);
    // Как только массив начнёт нормально заполнятся, то просто убери консоль логи и раскомментируй нижнюю строку
    // setDestinationPrices(convertedPrices)
    setCurrency(value as CURRENCIES);
  };

  return (
    <FormControl>
      <InputLabel id={CURRENCY_SWITCHER_ID}>{t("label.currency")}</InputLabel>
      <Select
        MenuProps={{
          disableScrollLock: true,
        }}
        id={CURRENCY_SWITCHER_ID}
        labelId={CURRENCY_SWITCHER_LABEL_ID}
        label={t("label.currency")}
        onChange={handleChange}
        value={currency}
        sx={{
          [`#${CURRENCY_SWITCHER_ID}`]: {
            py: 1,
            width: "34px",
          },
        }}
      >
        {CURRENCY_ITEM.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
