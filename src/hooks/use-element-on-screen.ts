import { MutableRefObject, useEffect, useRef, useState } from "react";

type UseElementOnScreen = [MutableRefObject<HTMLElement | null>, boolean];

export const useElementOnScreen = (
  options: IntersectionObserverInit = { root: null, rootMargin: "0px", threshold: 1.0 }
): UseElementOnScreen => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const { current } = ref;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};
