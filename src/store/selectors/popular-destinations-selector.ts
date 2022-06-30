import { selector } from "recoil";
import { popularDestinations } from "store/atoms";
import { SELECTORS } from "store/recoil-enums";

export const popularDestinationsSelector = selector({
  key: SELECTORS.POPULAR_DESTINATIONS_SELECTOR,
  get: ({ get }) => get(popularDestinations),
});
