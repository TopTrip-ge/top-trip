import { useContext } from "react";
import { useAuthState as useAuthStateHook } from "react-firebase-hooks/auth";

import { FirebaseContext } from "../context";

export const useAuthState = () => {
  const { auth } = useContext(FirebaseContext);

  return useAuthStateHook(auth);
};
