import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currencyState, popularDestinations } from "recoil/atoms";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material";
import { CURRENCIES } from "enums";
import { convertCurrency } from "utils/convert-currency";

export const useCurrencySwitcher = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [destinationPrices, setDestinationPrices] = useRecoilState(popularDestinations);
  const { t } = useTranslation();

  useEffect(() => {
    setCurrency(JSON.parse(localStorage.getItem("currency")!));
    setDestinationPrices(JSON.parse(localStorage.getItem("destinationPrices")!));
  }, []);

  const handleChange = ({ target: { value } }: SelectChangeEvent<CURRENCIES>) => {
    const convertedPricesPromises: Promise<number>[] = destinationPrices.map((price) =>
      convertCurrency(price, currency, value)
    );

    Promise.all(convertedPricesPromises).then((convertedPrices) => {
      setDestinationPrices(convertedPrices);
      setCurrency(value as CURRENCIES);
      localStorage.setItem("currency", JSON.stringify(value));
      localStorage.setItem("destinationPrices", JSON.stringify(convertedPrices));
    });
  };

  return { t, handleChange, currency };
};
