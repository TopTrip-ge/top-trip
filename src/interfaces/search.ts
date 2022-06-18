import { ReactNode } from "react";

export interface SelectDestinationTypes {
  id: string;
  direction: string;
  setDirection: (value: string) => void;
  values: ReactNode;
  label: string;
}

export interface SearchProps {
  from: string;
  where: string;
  date: Date | null;
  setDatePickerValue: (date: Date | null) => void;
  setFrom: (value: string) => void;
  setWhere: (value: string) => void;
}
