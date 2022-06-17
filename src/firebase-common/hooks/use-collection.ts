import { useContext } from "react";
import { CollectionHook, useCollection as useCollectionHook } from "react-firebase-hooks/firestore";
import { collection, DocumentData } from "firebase/firestore";
import { FirebaseContext } from "../context";

/**
 * @param collectionName
 * @param pathSegments
 */

export const useCollection = <T extends DocumentData>(
  collectionName: string,
  pathSegments: string[] = []
): CollectionHook<T> => {
  const { firestore } = useContext(FirebaseContext);
  const collectionRef = collection(firestore, collectionName, ...pathSegments);

  return useCollectionHook(collectionRef);
};
