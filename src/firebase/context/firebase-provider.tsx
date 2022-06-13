import { FC, ReactNode, createContext } from "react";

import { Context } from "./firebase-interfaces";
import { FirebaseInstances } from "../firebase-interfaces";

interface Props {
  children: ReactNode;
  firebaseInstances: FirebaseInstances;
}

export const FirebaseContext = createContext<Context>({} as Context);

export const FirebaseProvider: FC<Props> = ({ children, firebaseInstances }) => (
  <FirebaseContext.Provider value={firebaseInstances}>{children}</FirebaseContext.Provider>
);
