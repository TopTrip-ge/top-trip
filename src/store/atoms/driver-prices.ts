import { atom } from "recoil";
import { ATOMS } from "store/recoil-enums";
import { DRIVER_IDS } from "enums";

export const driversState = atom({
  key: ATOMS.DRIVER_PRICES,
  default: [
    {
      id: DRIVER_IDS.CAR_1,
      price: 240,
    },
    {
      id: DRIVER_IDS.CAR_2,
      price: 250,
    },
    {
      id: DRIVER_IDS.CAR_3,
      price: 314,
    },
  ],
});
