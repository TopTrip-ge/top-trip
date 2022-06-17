import { useCollection } from "firebase-common/hooks/use-collection";
import { Destination } from "interfaces/destination";

export const sortDestinations = () => {
  const [database] = useCollection<Destination>("destinations");

  const unsortedDestinations = database?.docs.map((document) => ({
    destinationId: document.id,
    destinationName: document.data().name,
  }));

  const destinations = unsortedDestinations?.sort((prev, next) =>
    prev.destinationName > next.destinationName ? 1 : -1
  );

  return destinations;
};
