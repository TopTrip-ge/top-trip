import { useState } from "react";
import { SearchProps } from "interfaces";

export const useSearchProps = (): SearchProps => {
  const [date, setDate] = useState<Date | null>(null);

  const setDatePickerValue = (newValue: Date | null) => setDate(newValue);

  return { date, setDatePickerValue };
};
