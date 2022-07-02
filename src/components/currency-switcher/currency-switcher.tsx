import { FC } from "react";
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { CURRENCIES } from "enums";
import { CURRENCY_SWITCHER_LABEL_ID, CURRENCY_SWITCHER_ID } from "./currency-switcher-constants";
import { useCurrencySwitcher } from "./currency-switcher-hooks";

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
  const { t, handleChange, currency } = useCurrencySwitcher();

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
        onChange={(event) => handleChange(event.target.value as CURRENCIES)}
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
