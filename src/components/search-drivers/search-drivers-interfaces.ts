import { TFunction } from "react-i18next";
import { LANGUAGES } from "enums/localization";
import { SearchDestination } from "interfaces/search";
import { UseSearchDriversFormik } from "./hooks";

export interface SearchDriverContext extends UseSearchDriversFormik {
  menuItems: SearchDestination[];
  t: TFunction<"translation", undefined>;
  lang: LANGUAGES;
}
