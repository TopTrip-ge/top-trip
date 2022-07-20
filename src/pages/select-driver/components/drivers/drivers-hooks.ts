import { useRecoilValue } from "recoil";
import { CURRENCIES } from "enums";
import { currencyStateSelector } from "store/selectors";

export const useDrivers = () => {
  const currency = useRecoilValue<CURRENCIES>(currencyStateSelector);

  return { currency };
};
