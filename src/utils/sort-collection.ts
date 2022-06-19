/*
 * In this function, the elements of the incoming collection are sorted in alphabetical order.
 */
import { QuerySnapshot } from "firebase/firestore";

export const sortCollection = <T>(collection?: QuerySnapshot<T>) => {
  const unsortedArray = collection?.docs.map(({ id, data }) => ({
    arrayElementId: id,
    arrayElementName: data().name,
  }));

  return unsortedArray?.sort((prev: { arrayElementName: string }, next: { arrayElementName: string }) =>
    prev.arrayElementName > next.arrayElementName ? 1 : -1
  );
};
