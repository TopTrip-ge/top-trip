import { LOG_EVENTS_BUTTONS } from "enums";
import { useAnalyticsLog } from "firebase-common";

export const useSearchAnchor = () => {
  const { logEvent } = useAnalyticsLog();

  const handleAnchorClick = () => {
    logEvent(LOG_EVENTS_BUTTONS.CLICK_PLAN_TOUR);
  };

  return {
    handleAnchorClick,
  };
};
