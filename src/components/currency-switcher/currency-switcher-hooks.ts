import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { useAnalyticsLog } from "firebase-common";
import { currencyState, popularDestinations } from "store/atoms";
import { CURRENCIES, LOCAL_STORAGE_NAMES, LOG_EVENTS_SELECTORS } from "enums";
import { convertCurrency } from "utils";
import { YMap } from "modules/yandex-map";

export const useCurrencySwitcher = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [destinations, setDestinations] = useRecoilState(popularDestinations);
  const { logEvent } = useAnalyticsLog();
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

    (async () => {
      const res1 = await YMap.getCoordinatesOfPlace("Агара, Грузия");
      const res2 = await YMap.getCoordinatesOfPlace("Абастумани, Грузия");
      const moscowCoords = res1.geoObjects.get(0).geometry.getCoordinates();
      const newYorkCoords = res2.geoObjects.get(0).geometry.getCoordinates();

      const distance = await YMap.getDistanceBetweenCoordinates(moscowCoords, newYorkCoords);
      console.log(distance);
    })();
  }, []);

  useEffect(() => {
    logEvent(LOG_EVENTS_SELECTORS.SELECT_CURRENCY, { currency });
  }, [currency, logEvent]);

  return { t, handleChange, currency };
};
