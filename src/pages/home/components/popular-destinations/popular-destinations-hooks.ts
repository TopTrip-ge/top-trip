import { LOCALIZATION_NAMESPACES } from "enums/localization";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import uniqid from "uniqid";
import { makeFirebaseStoragePath } from "utils";

export const usePopularDestinations = () => {
  const { t, i18n } = useTranslation(LOCALIZATION_NAMESPACES.DESTINATIONS, { keyPrefix: "destinations" });

  const destinations = useMemo(
    () => [
      {
        id: uniqid(),
        destinationsName: `${t("sighnaghi")} - ${t("bakhmaro")}`,
        price: 492,
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_1.jpg?alt=media&token=6f5d138b-4384-45b0-bd03-e1846c60a11b"
        ),
      },
      {
        id: uniqid(),
        destinationsName: `${t("mtskheta")} - ${t("samtavro-monastery")} - ${t("jvari")}`,
        price: 65,
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_2.jpg?alt=media&token=27b8e746-18e8-47a4-beb3-8cf72c58a78f"
        ),
      },
      {
        id: uniqid(),
        destinationsName: `${t("ananuri")} - ${t("gonio")}`,
        price: 327,
        date: "2022-06-01 - 2023-06-01",
        imageURL: makeFirebaseStoragePath(
          "destinationImages%2FdestinationImage_3.jpg?alt=media&token=cc8d4bd7-5e79-47ce-b5c6-883de7045c27"
        ),
      },
    ],
    [i18n.language]
  );

  return destinations;
};
