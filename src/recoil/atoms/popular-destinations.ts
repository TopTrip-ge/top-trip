import { atom } from "recoil";
import { ATOMS } from "recoil/recoil-enums";

export const popularDestinations = atom({
  key: ATOMS.POPULAR_DESTINATIONS,
  default: [492, 65, 327],
});
