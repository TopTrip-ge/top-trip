import { atom } from "recoil";
import { ATOMS } from "recoil/recoil-enums";

export const popularDestinations = atom({
  key: ATOMS.POPULAR_DESTINATIONS,
  default: [
    {
      id: "810342d6",
      price: 492,
    },
    {
      id: "ea01a093",
      price: 327,
    },
    {
      id: "18381a41",
      price: 65,
    },
  ],
});
