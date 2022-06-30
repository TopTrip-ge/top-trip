import { selector } from "recoil";
import { currencyState } from "store/atoms";
import { SELECTORS } from "store/recoil-enums";

export const currencyStateSelector = selector({
  key: SELECTORS.CURRENCY_STATE_SELECTOR,
  get: ({ get }) => get(currencyState),
});
