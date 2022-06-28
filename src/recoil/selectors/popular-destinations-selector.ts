import { selector } from "recoil";
import { popularDestinations } from "recoil/atoms/popular-destinations";
import { SELECTORS } from "recoil/recoil-enums";

export const popularDestinationsSelector = selector({
  key: SELECTORS.POPULAR_DESTINATIONS_SELECTOR,
  get: ({ get }) => get(popularDestinations),
});
