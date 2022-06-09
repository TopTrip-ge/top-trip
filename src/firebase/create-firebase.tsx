import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "./config";

const createFirebase = (config: Record<string, string | undefined>) => {
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  return {
    analytics,
    firestore,
    auth,
  };
};

export const firebaseInstances = createFirebase(firebaseConfig);
