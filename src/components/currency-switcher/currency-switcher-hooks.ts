import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { useAnalyticsLog } from "firebase-common";
import { currencyState, popularDestinations, driversState } from "store/atoms";
import { CURRENCIES, LOCAL_STORAGE_NAMES, LOG_EVENTS_SELECTORS } from "enums";
import { convertCurrency } from "utils";

export const useCurrencySwitcher = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [destinations, setDestinations] = useRecoilState(popularDestinations);
  const [drivers, setDrivers] = useRecoilState(driversState);
  const { logEvent } = useAnalyticsLog();
  const { t } = useTranslation();

  const handleChange = (value: CURRENCIES) => {
    const convertedDestinationPricesPromises: Promise<number>[] = destinations.map(({ price }) =>
      convertCurrency(price, currency, value)
    );
    const convertedDriversPricesPromises: Promise<number>[] = drivers.map(({ price }) =>
      convertCurrency(price, currency, value)
    );

    Promise.all(convertedDestinationPricesPromises).then((convertedPrices) => {
      const convertedDestinationPrices = convertedPrices.map((priceItem, index) => {
        return { id: destinations[index].id, price: priceItem };
      });
      setDestinations(convertedDestinationPrices);
    });
    Promise.all(convertedDriversPricesPromises).then((convertedPrices) => {
      const convertedDriversPrices = convertedPrices.map((priceItem, index) => {
        return { id: drivers[index].id, price: priceItem };
      });
      setDrivers(convertedDriversPrices);
    });

    setCurrency(value as CURRENCIES);
    localStorage.setItem(LOCAL_STORAGE_NAMES.CURRENCY, value);
  };

  useEffect(() => {
    const localCurrency = localStorage.getItem(LOCAL_STORAGE_NAMES.CURRENCY);
    if (localCurrency !== null) {
      handleChange(localCurrency as CURRENCIES);
    }
  }, []);

  useEffect(() => {
    logEvent(LOG_EVENTS_SELECTORS.SELECT_CURRENCY, { currency });
  }, [currency, logEvent]);

  return { t, handleChange, currency };
};
