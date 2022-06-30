import { useTranslation } from "react-i18next";
import { LOCALIZATION_NAMESPACES } from "enums";
import { IconTypes } from "components/icon";
import { ICON_NAMES } from "./why-us-constants";

export const useWhyUs = () => {
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.HOME_SECTIONS);

  const getIcon = (id: string): IconTypes => {
    const iconWithId = ICON_NAMES.find((item) => item.id === id);
    if (!iconWithId) {
      throw new Error(`Не найдена иконка для причины выбора нас. ID=${id}`);
    }
    return iconWithId.icon;
  };

  return { t, getIcon };
};
