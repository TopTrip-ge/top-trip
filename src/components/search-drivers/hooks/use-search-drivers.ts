import { useContext } from "react";
import { SearchDriversContext } from "../context/search-drivers-context";

export const useSearchDrivers = () => {
  const context = useContext(SearchDriversContext);

  if (!context) {
    throw new Error("The hook 'useSearchDrivers' must be used only in the context 'SearchDriversContext'");
  }

  return context;
};
