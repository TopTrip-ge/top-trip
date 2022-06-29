import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currencyState, popularDestinations } from "recoil/atoms";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material";
import { CURRENCIES } from "enums";
import { convertCurrency } from "utils/convert-currency";

export const useCurrencySwitcher = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [destinations, setDestinations] = useRecoilState(popularDestinations);
  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("currency") && localStorage.getItem("destinations")) {
      setCurrency(JSON.parse(localStorage.getItem("currency")!));
      setDestinations(JSON.parse(localStorage.getItem("destinations")!));
    }
  }, []);

  const handleChange = ({ target: { value } }: SelectChangeEvent<CURRENCIES>) => {
    const convertedPricesPromises: Promise<number>[] = destinations.map(({ price }) =>
      convertCurrency(price, currency, value)
    );

    Promise.all(convertedPricesPromises).then((convertedPrices) => {
      const convertedDestinationPrices = convertedPrices.map((priceItem, index) => {
        return { id: destinations[index].id, price: priceItem };
      });
      setDestinations(convertedDestinationPrices);
      setCurrency(value as CURRENCIES);
      localStorage.setItem("currency", JSON.stringify(value));
      localStorage.setItem("destinations", JSON.stringify(convertedDestinationPrices));
    });
  };

  return { t, handleChange, currency };
};
