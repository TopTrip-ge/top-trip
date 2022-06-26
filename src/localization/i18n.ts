import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { LANGUAGES, LOCALIZATION_NAMESPACES } from "enums";

const MAINTAINED_LANGUAGES = [LANGUAGES.RU, LANGUAGES.EN];

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    fallbackLng: LANGUAGES.EN,
    defaultNS: LOCALIZATION_NAMESPACES.COMMON,
    ns: [
      LOCALIZATION_NAMESPACES.COMMON,
      LOCALIZATION_NAMESPACES.GLOSSARY,
      LOCALIZATION_NAMESPACES.HOME_SECTIONS,
      LOCALIZATION_NAMESPACES.NOT_FOUND_PAGE,
      LOCALIZATION_NAMESPACES.ERROR_PAGE,
      LOCALIZATION_NAMESPACES.DESTINATIONS,
    ],
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    supportedLngs: MAINTAINED_LANGUAGES,
  });

export default i18next;
