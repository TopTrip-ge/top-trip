import { LANGUAGES } from "enums/localization";
import { SearchDestination } from "interfaces/search";
import { FC, ReactNode, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { RUdestinations, ENdestinations } from "mock-database/destinations";
import { useSearchDriversFormik } from "../hooks";
import { SearchDriversContext } from "./search-drivers-context";
import { SearchDriverContext as SearchDriverContextInterface } from "../search-drivers-interfaces";

interface Props {
  children: ReactNode;
}

export const SearchDriversProvider: FC<Props> = ({ children }) => {
  const searchDriversValues = useSearchDriversFormik();
  const { i18n, t } = useTranslation();
  const menuItems: SearchDestination[] = i18n.language === LANGUAGES.RU ? RUdestinations : ENdestinations;

  useEffect(() => {
    searchDriversValues.resetForm();
  }, [i18n.language]);

  const value: SearchDriverContextInterface = useMemo(
    () => ({
      ...searchDriversValues,
      menuItems,
      t,
      lang: i18n.language as LANGUAGES,
    }),
    [menuItems, searchDriversValues, t, i18n.language]
  );

  return <SearchDriversContext.Provider value={value}>{children}</SearchDriversContext.Provider>;
};
