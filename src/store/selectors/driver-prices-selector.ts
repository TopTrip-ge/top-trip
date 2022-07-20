import { selector } from "recoil";
import { driversState } from "store/atoms";
import { SELECTORS } from "store/recoil-enums";

export const driversStateSelector = selector({
  key: SELECTORS.DRIVER_PRICES_SELECTOR,
  get: ({ get }) => get(driversState),
});
