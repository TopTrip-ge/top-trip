import { SearchProps } from "../components/search/search-interfaces";
import { useSearchProps } from "./use-search-props";

interface UseHome {
  searchProps: SearchProps;
}

export const useHome = (): UseHome => {
  const searchProps = useSearchProps();

  return { searchProps };
};
