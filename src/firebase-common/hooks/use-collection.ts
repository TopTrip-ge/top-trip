import { useCollection as useCollectionHook } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";

interface Destinations {
  destinationName: string;
  destinationId: string;
}

export const useCollection = () => {
  const firebaseApp = initializeApp(firebaseConfig);
  const unsortedDestinations: Destinations[] = [];

  const [database] = useCollectionHook(collection(getFirestore(firebaseApp), "destinations"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  database?.docs.map((doc) => {
    const destinationId = doc.id;
    const destinationName = doc.data().name;
    return unsortedDestinations.push({ destinationId, destinationName });
  });

  const destinations = unsortedDestinations.sort((prev, next) =>
    prev.destinationName > next.destinationName ? 1 : -1
  );
  return { destinations };
};
