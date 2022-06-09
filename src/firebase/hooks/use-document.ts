import { useContext, useEffect, useMemo } from "react";
import { FirebaseError } from "firebase/app";
import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { useLoadingValue } from "hooks/use-loading-value";
import { FirebaseContext } from "../context";

const loadDocument = async (ref: DocumentReference<DocumentData>) => {
  return await getDoc(ref);
};

/**
 *
 * @param path
 * @param pathSegments The last parameter must be a document id
 */
let prev: any = null;
export const useDocument = (path: string, pathSegments: string[]) => {
  const pathSegmentsMemo = useMemo(() => pathSegments, []);
  const { firestore } = useContext(FirebaseContext);
  const { error, isLoading, setError, setIsLoading, setValue, value } =
    useLoadingValue<DocumentSnapshot<DocumentData>, FirebaseError>();
  const docRef = useMemo(
    () => doc(firestore, path, ...pathSegmentsMemo),
    [firestore, path, pathSegmentsMemo]
  );
  console.log(docRef === prev);

  useEffect(() => {
    setIsLoading(true);
    loadDocument(docRef)
      .then((data) => {
        setValue(data);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [docRef, setError, setIsLoading, setValue]);

  return { value, isLoading, error };
};
