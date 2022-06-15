import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { FirebaseContext } from "../context";

export const useCreateDocument = <T extends object>(collectionName: string, data: T, additionalPath: string[] = []) => {
  const { firestore } = useContext(FirebaseContext);
  const collectionRef = collection(firestore, collectionName, ...additionalPath);

  return async () => {
    await addDoc(collectionRef, data);
  };
};
