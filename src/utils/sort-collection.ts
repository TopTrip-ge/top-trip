import { Order } from "interfaces/order";

export const sortCollection = <T extends object>(collection: T[], field: keyof T, order: Order = "ASC") =>
  collection.sort((prev, next) => {
    const isAsc = order === "ASC";

    if (isAsc) {
      return prev[field] > next[field] ? 1 : -1;
    }

    return prev[field] > next[field] ? -1 : 1;
  });
