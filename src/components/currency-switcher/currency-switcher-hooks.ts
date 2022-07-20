import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { useAnalyticsLog } from "firebase-common";
import { currencyState } from "store/atoms";
import { CURRENCIES, LOCAL_STORAGE_NAMES, LOG_EVENTS_SELECTORS } from "enums";

export const useCurrencySwitcher = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const { logEvent } = useAnalyticsLog();
  const { t } = useTranslation();

  const handleChange = (value: CURRENCIES) => {
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
