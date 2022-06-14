import { useContext } from "react";
import { logEvent } from "firebase/analytics";
import { FirebaseContext } from "firebase-common/context";

export const useAnalyticsLog = () => {
  const { analytics } = useContext(FirebaseContext);

  return (event: string, params?: Record<string, unknown>) => logEvent(analytics, event, params);
};
