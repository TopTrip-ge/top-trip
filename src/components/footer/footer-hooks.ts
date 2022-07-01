import { useEffect, useState } from "react";
import { useAnalyticsLog } from "firebase-common";
import { useElementOnScreen } from "hooks";
import { LOG_EVENTS_COMMON } from "enums";

export const useFooter = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.5 });
  const { logEvent } = useAnalyticsLog();

  useEffect(() => {
    if (!isScrolledDown && isVisible) {
      logEvent(LOG_EVENTS_COMMON.END_OF_PAGE);
      setIsScrolledDown(true);
    }
  }, [isVisible, isScrolledDown, logEvent]);

  return {
    endOfPageRef: ref,
  };
};
