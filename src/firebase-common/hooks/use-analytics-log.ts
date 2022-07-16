import { useContext } from "react";
import { logEvent as logEventFirebase } from "firebase/analytics";
import { FirebaseContext } from "firebase-common/context";

export const useAnalyticsLog = () => {
  const { analytics } = useContext(FirebaseContext);

  return {
    logEvent: <P extends object>(event: string, params?: P) => logEventFirebase(analytics, event, params),
  };
};
