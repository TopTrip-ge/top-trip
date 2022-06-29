import { atom } from "recoil";
import { ATOMS } from "store/recoil-enums";
import { POPULAR_DESTINATIONS_IDS } from "enums";

export const popularDestinations = atom({
  key: ATOMS.POPULAR_DESTINATIONS,
  default: [
    {
      id: POPULAR_DESTINATIONS_IDS.DESTINATION_1,
      price: 492,
    },
    {
      id: POPULAR_DESTINATIONS_IDS.DESTINATION_3,
      price: 327,
    },
    {
      id: POPULAR_DESTINATIONS_IDS.DESTINATION_2,
      price: 65,
    },
  ],
});
