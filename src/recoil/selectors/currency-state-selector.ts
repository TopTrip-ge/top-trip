import { selector } from "recoil";
import { currencyState } from "recoil/atoms";
import { SELECTORS } from "recoil/recoil-enums";

export const currencyStateSelector = selector({
  key: SELECTORS.CURRENCY_STATE_SELECTOR,
  get: ({ get }) => get(currencyState),
});
