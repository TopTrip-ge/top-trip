import { useContext, useEffect, useMemo } from "react";
import {
  collection,
  DocumentData,
  getDocs,
  Query,
  query as firebaseQuery,
  QueryConstraint,
  QuerySnapshot,
} from "firebase/firestore";

import { FirebaseContext } from "../context";
import { useLoadingValue } from "hooks/use-loading-value";
import { FirebaseError } from "firebase/app";

const loadDocs = async (query: Query<DocumentData>) => {
  return await getDocs(query);
};

export const useDocuments = (
  path: string,
  conditions: QueryConstraint[],
  pathSegments: string[] = []
) => {
  const { firestore } = useContext(FirebaseContext);
  const { error, isLoading, setError, setIsLoading, setValue, value } =
    useLoadingValue<QuerySnapshot<DocumentData>, FirebaseError>();
  const query = useMemo(
    () =>
      firebaseQuery(
        collection(firestore, path, ...pathSegments),
        ...conditions
      ),
    [conditions, firestore, path, pathSegments]
  );
  useEffect(() => {
    setIsLoading(true);
    loadDocs(query)
      .then((data) => {
        setValue(data);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [
    conditions,
    firestore,
    path,
    pathSegments,
    query,
    setError,
    setIsLoading,
    setValue,
  ]);

  return [value, isLoading, error];
};
