import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { CURRENCIES } from "enums";
import { CURRENCY_SWITCHER_LABEL_ID, CURRENCY_SWITCHER_ID } from "./currency-switcher-constants";

type StateType = CURRENCIES.EURO | CURRENCIES.GEL | CURRENCIES.RUB | CURRENCIES.USD;

const CURRENCY_ITEM = [
  {
    label: <Typography>{CURRENCIES.EURO}</Typography>,
    value: CURRENCIES.EURO,
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
  const [currency, setCurrency] = useState<string | StateType>(CURRENCIES.USD);
  const { t } = useTranslation();

  const handleChange = ({ target: { value } }: SelectChangeEvent<CURRENCIES>) => {
    setCurrency(value);
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
        value={currency as CURRENCIES}
        sx={{
          [`#${CURRENCY_SWITCHER_ID}`]: {
            py: 1,
            width: "50px",
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
