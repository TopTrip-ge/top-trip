import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { FirebaseContext } from "../context";

export const useCreateDocument = <T extends object>(collectionName: string, data: T, additionalPath: string[] = []) => {
  const { firestore } = useContext(FirebaseContext);

  return async () => {
    await addDoc(collection(firestore, collectionName, ...additionalPath), data);
  };
};
