import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { makeFirebaseStoragePath } from "utils";
import { LOCALIZATION_NAMESPACES, POPULAR_DESTINATIONS_IDS } from "enums";
import { popularDestinationsSelector, currencyStateSelector } from "store/selectors";

export const usePopularDestinations = () => {
  const { t, i18n } = useTranslation(LOCALIZATION_NAMESPACES.DESTINATIONS, { keyPrefix: "destinations" });
  const prices = useRecoilValue(popularDestinationsSelector);
  const currency = useRecoilValue(currencyStateSelector);

  const findPrice = (id: string): number => {
    const destinationPrice = prices.find((item: { id: string; price: number }) => item.id === id);
    if (!destinationPrice) {
      throw new Error(`Не найдена цена для популярного направления. ID=${id}`);
    }
    return destinationPrice.price;
  };

  const destinations = useMemo(
    () => [
      {
        id: POPULAR_DESTINATIONS_IDS.DESTINATION_1,
        destinationsName: `${t("sighnaghi")} - ${t("bakhmaro")}`,
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_1.jpg?alt=media&token=6f5d138b-4384-45b0-bd03-e1846c60a11b"
        ),
      },
      {
        id: POPULAR_DESTINATIONS_IDS.DESTINATION_2,
        destinationsName: `${t("mtskheta")} - ${t("samtavro-monastery")} - ${t("jvari")}`,
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_2.jpg?alt=media&token=27b8e746-18e8-47a4-beb3-8cf72c58a78f"
        ),
      },
      {
        id: POPULAR_DESTINATIONS_IDS.DESTINATION_3,
        destinationsName: `${t("ananuri")} - ${t("gonio")}`,
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_3.jpg?alt=media&token=cc8d4bd7-5e79-47ce-b5c6-883de7045c27"
        ),
      },
    ],
    [i18n.language]
  );

  return { destinations, findPrice, currency };
};
