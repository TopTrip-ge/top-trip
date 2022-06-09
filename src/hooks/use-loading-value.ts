import { useState } from "react";

export const useLoadingValue = <T, E = unknown>() => {
  const [value, setValue] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<E | null>(null);

  return {
    value,
    setValue,
    isLoading,
    setIsLoading,
    error,
    setError,
  };
};
