import { SearchDestination } from "pages/home/components/search/search-interfaces";

export interface SearchForm {
  from: SearchDestination;
  where: {
    id: string;
    label: string;
    key: string;
  }[];
  date: string;
}
