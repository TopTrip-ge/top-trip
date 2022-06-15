import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

export const useHome = () => {
  const [from, setFrom] = useState("");
  const [where, setWhere] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  const setDatePickerValue = (newValue: Date | null) => setDate(newValue);

  const setFromTown = (event: SelectChangeEvent) => {
    setFrom(event.target.value as string);
  };

  const setWhereTown = (event: SelectChangeEvent) => {
    setWhere(event.target.value as string);
  };

  return { from, where, date, setDatePickerValue, setFromTown, setWhereTown };
};
