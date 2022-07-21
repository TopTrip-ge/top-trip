import { selector } from "recoil";
import { searchValuesState } from "store/atoms";
import { SELECTORS } from "store/recoil-enums";

export const searchValuesStateSelector = selector({
  key: SELECTORS.SEARCH_VALUES_STATE_SELECTOR,
  get: ({ get }) => get(searchValuesState),
});
