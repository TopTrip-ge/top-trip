import { useCollection } from "firebase-common/hooks/use-collection";

export interface Destinations {
  destinationName: string;
  destinationId: string;
}

export const sortDestinations = () => {
  const unsortedDestinations: Destinations[] = [];
  const [database] = useCollection("destinations");

  database?.docs.map((document: any) => {
    const destinationId = document.id;
    const destinationName = document.data().name;
    return unsortedDestinations.push({ destinationId, destinationName });
  });

  const destinations = unsortedDestinations.sort((prev, next) =>
    prev.destinationName > next.destinationName ? 1 : -1
  );

  return { destinations };
};
