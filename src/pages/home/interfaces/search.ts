import { SelectChangeEvent } from "@mui/material";

export interface SearchProps {
  from: string;
  where: string;
  date: Date | null;
  setDatePickerValue: (date: Date | null) => void;
  setFromTown: (event: SelectChangeEvent<string>) => void;
  setWhereTown: (event: SelectChangeEvent<string>) => void;
}
