import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { makeFirebaseStoragePath } from "utils";
import { LANGUAGES, LOCALIZATION_NAMESPACES, POPULAR_DESTINATIONS_IDS } from "enums";
import { currencyStateSelector } from "store/selectors";

export const usePopularDestinations = () => {
  const { i18n } = useTranslation(LOCALIZATION_NAMESPACES.DESTINATIONS, { keyPrefix: "destinations" });
  const currency = useRecoilValue(currencyStateSelector);

  const destinations = useMemo(
    () => [
      {
        id: POPULAR_DESTINATIONS_IDS.DESTINATION_1,
        destinationsName: i18n.language === LANGUAGES.RU ? "Сигнахи - Бахмаро" : "Sighnaghi - Bakhmaro",
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_1.jpg?alt=media&token=6f5d138b-4384-45b0-bd03-e1846c60a11b"
        ),
        price: 492,
      },
      {
        id: POPULAR_DESTINATIONS_IDS.DESTINATION_2,
        destinationsName:
          i18n.language === LANGUAGES.RU
            ? "Мцхета - монастырь Самтавро - Джвари"
            : "Mtskheta - Samtavro-monastery - Jvari",
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_2.jpg?alt=media&token=27b8e746-18e8-47a4-beb3-8cf72c58a78f"
        ),
        price: 65,
      },
      {
        id: POPULAR_DESTINATIONS_IDS.DESTINATION_3,
        destinationsName: i18n.language === LANGUAGES.RU ? "Ананури - Гонио" : "Ananuri - Gonio",
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_3.jpg?alt=media&token=cc8d4bd7-5e79-47ce-b5c6-883de7045c27"
        ),
        price: 327,
      },
    ],
    [i18n.language]
  );

  return { destinations, currency };
};
