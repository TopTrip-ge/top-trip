import { DRIVER_IDS } from "enums";
import { makeFirebaseStoragePath } from "utils";
import { Driver } from "./driver-card-interfaces";

export const drivers: Driver[] = [
  {
    id: DRIVER_IDS.CAR_1,
    carImage: makeFirebaseStoragePath("carImages%2Fcar_1.png?alt=media&token=de8b8294-6199-462a-8b7a-1aa916935e43"),
    name: {
      ruName: "Георгий",
      enName: "Georgy",
    },
    language: {
      ruLanguage: ["Русский", "Английский"],
      enLanguage: ["Russian", "English"],
    },
    carName: "Dodge Challenger Srt Hellcat",
    passengerSeats: 2,
    luggageAmount: 3,
    fuel: {
      ruFuel: "Бензин",
      enFuel: "Gasoline",
    },
    freeWiFi: true,
    animalsTransportation: false,
  },
  {
    id: DRIVER_IDS.CAR_2,
    carImage: makeFirebaseStoragePath("carImages%2Fcar_2.png?alt=media&token=14bddc22-b40c-4a7c-b8ba-2fca1bcc1b5d"),
    name: {
      ruName: "Давид",
      enName: "David",
    },
    language: {
      ruLanguage: ["Русский", "Грузинский"],
      enLanguage: ["Russian", "Georgian"],
    },
    carName: "Mercedes-Benz W210",
    passengerSeats: 5,
    luggageAmount: 10,
    fuel: {
      ruFuel: "Дизель",
      enFuel: "Diesel",
    },
    freeWiFi: true,
    animalsTransportation: true,
  },
  {
    id: DRIVER_IDS.CAR_3,
    carImage: makeFirebaseStoragePath("carImages%2Fcar_3.png?alt=media&token=294130ab-7204-407a-9862-2c092a0333cc"),
    name: {
      ruName: "Николоз",
      enName: "Nikoloz",
    },
    language: {
      ruLanguage: ["Грузинский"],
      enLanguage: ["Georgian"],
    },
    carName: "Nissan Silvia S15 Spec R",
    passengerSeats: 2,
    luggageAmount: 2,
    fuel: {
      ruFuel: "Бензин",
      enFuel: "Gasoline",
    },
    freeWiFi: false,
    animalsTransportation: false,
  },
];
