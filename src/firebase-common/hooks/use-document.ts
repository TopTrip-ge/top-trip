import { useContext } from "react";
import { doc } from "firebase/firestore";
import { useDocument as useDocumentHook } from "react-firebase-hooks/firestore";
import { FirebaseContext } from "../context";

/**
 *
 * @param path
 * @param pathSegments The last parameter must be a document id
 */

export const useDocument = (path: string, pathSegments: string[]) => {
  const { firestore } = useContext(FirebaseContext);
  const docRef = doc(firestore, path, ...pathSegments);

  return useDocumentHook(docRef);
};
