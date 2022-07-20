import { useRecoilValue } from "recoil";
import { DRIVER_IDS, CURRENCIES } from "enums";
import { currencyStateSelector, driversStateSelector } from "store/selectors";

export const useDrivers = () => {
  const currency = useRecoilValue<CURRENCIES>(currencyStateSelector);
  const prices = useRecoilValue(driversStateSelector);

  const findDriverPrice = (id: DRIVER_IDS): number => {
    const driverPrice = prices.find((item) => item.id === id);
    if (!driverPrice) {
      throw new Error(`No price found for the driver's car. ID=${id}`);
    }
    return driverPrice.price;
  };

  return { currency, findDriverPrice };
};
