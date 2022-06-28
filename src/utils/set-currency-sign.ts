import { CURRENCIES } from "enums";

const formatCurrency = (format: string, selectedCurrency: CURRENCIES, value: number) =>
  Intl.NumberFormat(format, {
    maximumFractionDigits: 0,
    style: "currency",
    currency: selectedCurrency,
  }).format(value);

export const setCurrencySign = (currentCurrency: CURRENCIES, value: number) => {
  switch (currentCurrency) {
    case CURRENCIES.EUR:
      return formatCurrency("de-DE", CURRENCIES.EUR, value);
    case CURRENCIES.GEL:
      return formatCurrency("ka-KA", CURRENCIES.GEL, value);
    case CURRENCIES.RUB:
      return formatCurrency("ru-RU", CURRENCIES.RUB, value);
    case CURRENCIES.USD:
      return formatCurrency("en-EN", CURRENCIES.USD, value);
    default:
      return value;
  }
};
