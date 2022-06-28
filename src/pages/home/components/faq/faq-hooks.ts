import { SyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { LOCALIZATION_NAMESPACES } from "enums/localization";
import { FAQItem } from "./faq-interfaces";

export const useFaq = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.HOME_SECTIONS);
  const accordionItems = (t("faq") as FAQItem[]).map((item, index) => ({ ...item, panel: `faq-panel-${index + 1}` }));

  const handleChange = (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return { expanded, accordionItems, handleChange };
};
