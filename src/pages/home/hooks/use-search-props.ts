import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { SearchProps } from "../interfaces";

export const useSearchProps = (): SearchProps => {
  const [from, setFrom] = useState("");
  const [where, setWhere] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  const setDatePickerValue = (newValue: Date | null) => setDate(newValue);

  const setFromTown = ({ target: { value } }: SelectChangeEvent) => {
    setFrom(value);
  };

  const setWhereTown = ({ target: { value } }: SelectChangeEvent) => {
    setWhere(value);
  };

  return { from, where, date, setDatePickerValue, setFromTown, setWhereTown };
};
