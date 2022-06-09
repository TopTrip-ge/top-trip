import { onAuthStateChanged, User } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useLoadingValue } from "hooks/use-loading-value";

import { FirebaseContext } from "../context";

type UseAuthState = [boolean, User | null | undefined];

export const useAuthState = (): UseAuthState => {
  const { auth } = useContext(FirebaseContext);
  const { value, setValue } = useLoadingValue<User | null | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setValue(user);
      setIsLoggedIn(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth, setValue]);

  return [isLoggedIn, value];
};
