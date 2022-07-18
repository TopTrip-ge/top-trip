export interface SearchDestination {
  label: string;
  id: string;
}

export interface SearchDestinationWithKey extends SearchDestination {
  key: string;
}

export interface SearchForm {
  from: SearchDestination;
  where: SearchDestinationWithKey[];
  date: string;
}
