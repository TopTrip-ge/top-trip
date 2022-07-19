import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { DRIVER_IDS } from "enums/drivers";
import { currencyStateSelector, driversStateSelector } from "store/selectors";

export const useDriver = () => {
  const { t, i18n } = useTranslation();
  const currency = useRecoilValue(currencyStateSelector);
  const prices = useRecoilValue(driversStateSelector);

  const findDriverPrice = (id: DRIVER_IDS): number => {
    const driverPrice = prices.find((item) => item.id === id);
    if (!driverPrice) {
      throw new Error(`Не найдена цена для машины водителя. ID=${id}`);
    }
    return driverPrice.price;
  };

  return { t, i18n, currency, findDriverPrice };
};
