import { useContext } from "react";
import { logEvent as logEventFirebase } from "firebase/analytics";
import { FirebaseContext } from "firebase-common/context";

export const useAnalyticsLog = () => {
  const { analytics } = useContext(FirebaseContext);

  return {
    logEvent: (event: string, params?: Record<string, unknown>) => logEventFirebase(analytics, event, params),
  };
};
