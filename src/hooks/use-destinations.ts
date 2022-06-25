import uniqid from "uniqid";
import { useTranslation } from "react-i18next";
import { LOCALIZATION_NAMESPACES } from "enums/localization";
import { useMemo } from "react";

export const useDestinations = () => {
  const { t } = useTranslation([LOCALIZATION_NAMESPACES.DESTINATIONS]);
  const destinations = useMemo(() => t("destinations") as string[], []);

  return destinations.map((name) => ({
    id: uniqid(),
    name,
  }));
};
