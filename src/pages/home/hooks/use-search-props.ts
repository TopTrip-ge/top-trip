import { useState } from "react";
import { SearchProps } from "../components/search/search-interfaces";

export const useSearchProps = (): SearchProps => {
  const [from, setFrom] = useState("");
  const [where, setWhere] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  const setDatePickerValue = (newValue: Date | null) => setDate(newValue);

  return { from, where, date, setDatePickerValue, setFrom, setWhere };
};
