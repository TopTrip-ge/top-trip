import { useCollection as useCollectionHook } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";

export const useCollection = () => {
  const firebaseApp = initializeApp(firebaseConfig);

  const [destinations] = useCollectionHook(collection(getFirestore(firebaseApp), "destinations"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return { destinations };
};
