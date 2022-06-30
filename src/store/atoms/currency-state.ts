import { atom } from "recoil";
import { CURRENCIES } from "enums";
import { ATOMS } from "store/recoil-enums";

export const currencyState = atom({
  key: ATOMS.CURRENCY_STATE,
  default: CURRENCIES.USD,
});
