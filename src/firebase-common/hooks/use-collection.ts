import { useContext } from "react";
import { useCollection as useCollectionHook } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, DocumentData } from "firebase/firestore";
import { FirebaseContext } from "../context";

/**
 * @param collectionName
 * @param pathSegments
 */

export const useCollection = <T = DocumentData>(collectionName: string, pathSegments: string[] = []) => {
  const { firestore } = useContext(FirebaseContext);
  const collectionRef = collection(firestore, collectionName, ...pathSegments) as CollectionReference<T>;

  return useCollectionHook<T>(collectionRef);
};
