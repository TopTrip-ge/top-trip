import { SearchDestination } from "pages/home/components/search/search-interfaces";

export interface SearchForm {
  from: SearchDestination;
  where: (SearchDestination & { key: string })[];
  date: string;
}
