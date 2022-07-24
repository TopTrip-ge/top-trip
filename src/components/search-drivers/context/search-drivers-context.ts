import { createContext } from "react";
import { SearchDriverContext as SearchDriverContextInterface } from "../search-drivers-interfaces";

export const SearchDriversContext = createContext({} as SearchDriverContextInterface);
