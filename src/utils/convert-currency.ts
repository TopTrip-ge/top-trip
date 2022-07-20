import { CURRENCIES } from "enums";
import { setCurrencySign } from "./set-currency-sign";

export const convertCurrency = async (price: number, whereConvert: CURRENCIES) => {
  try {
    const response = await fetch(
      `https://api.exchangerate.host/convert?amount=${price}&from=${CURRENCIES.USD}&to=${whereConvert}`
    );
    const data = await response.json();
    return setCurrencySign(whereConvert, data.result);
    // Todo: Add errorAlert
  } catch {
    return null;
  }
};
