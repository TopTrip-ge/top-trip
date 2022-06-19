import { SearchProps } from "interfaces";
import { useSearchProps } from "./use-search-props";

interface UseHome {
  searchProps: SearchProps;
}

export const useHome = (): UseHome => {
  const searchProps = useSearchProps();

  return { searchProps };
};
