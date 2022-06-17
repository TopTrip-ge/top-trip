/*
 * In this function, the elements of the incoming database are sorted in alphabetical order.
 */
import { QuerySnapshot } from "firebase/firestore";
import { Destination } from "interfaces/destination";

interface ArrayElement {
  id: string;
  data: () => {
    name: string;
  };
}

export const sortArray = (database: QuerySnapshot<Destination> | undefined) => {
  const unsortedArray = database?.docs.map((arrayElement: ArrayElement) => ({
    arrayElementId: arrayElement.id,
    arrayElementName: arrayElement.data().name,
  }));

  return unsortedArray?.sort((prev: { arrayElementName: string }, next: { arrayElementName: string }) =>
    prev.arrayElementName > next.arrayElementName ? 1 : -1
  );
};
