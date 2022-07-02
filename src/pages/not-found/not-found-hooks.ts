import { useLocation } from "react-router";
import { useEffect } from "react";
import { useAnalyticsLog } from "firebase-common";
import { LOG_EVENTS_BUTTONS, LOG_EVENTS_COMMON } from "enums";

export const useNotFound = () => {
  const { logEvent } = useAnalyticsLog();
  const { pathname } = useLocation();

  useEffect(() => {
    logEvent(LOG_EVENTS_COMMON.PAGE_NOT_FOUND, { pathname });
  }, [logEvent]);

  const handleGoHomeClick = () => {
    logEvent(LOG_EVENTS_BUTTONS.CLICK_FROM_404_TO_HOME);
  };

  return { handleGoHomeClick };
};
