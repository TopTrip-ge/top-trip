import { CURRENCIES } from "enums";

export const convertCurrency = async (price: number, currentCurrency: CURRENCIES, whereConvert: string) => {
  try {
    const response = await fetch(
      `https://api.exchangerate.host/convert?amount=${price}&from=${currentCurrency}&to=${whereConvert}`
    );
    const data = await response.json();
    return data.result;
  } catch (e) {
    return e;
  }
};
