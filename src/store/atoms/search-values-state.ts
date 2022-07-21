import { atom } from "recoil";
import { ATOMS } from "store/recoil-enums";
import { SearchForm } from "interfaces/search";

export const searchValuesState = atom({
  key: ATOMS.SEARCH_VALUES_STATE,
  default: <SearchForm>{},
});
