import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { currencyState, popularDestinations } from "store/atoms";
import { CURRENCIES } from "enums";
import { convertCurrency } from "utils";
import { LOCAL_STORAGE_NAMES } from "./currency-switcher-constants";

export const useCurrencySwitcher = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [destinations, setDestinations] = useRecoilState(popularDestinations);
  const { t } = useTranslation();

  const handleChange = (value: CURRENCIES) => {
    const convertedPricesPromises: Promise<number>[] = destinations.map(({ price }) =>
      convertCurrency(price, currency, value)
    );

    Promise.all(convertedPricesPromises).then((convertedPrices) => {
      const convertedDestinationPrices = convertedPrices.map((priceItem, index) => {
        return { id: destinations[index].id, price: priceItem };
      });
      setDestinations(convertedDestinationPrices);
      setCurrency(value as CURRENCIES);
      localStorage.setItem(LOCAL_STORAGE_NAMES.CURRENCY, value);
    });
  };

  useEffect(() => {
    const localCurrency = localStorage.getItem(LOCAL_STORAGE_NAMES.CURRENCY);
    if (localCurrency !== null) {
      handleChange(localCurrency as CURRENCIES);
    }
  }, []);

  return { t, handleChange, currency };
};
