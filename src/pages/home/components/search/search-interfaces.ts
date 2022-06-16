export interface SearchProps {
  from: string;
  where: string;
  date: Date | null;
  setDatePickerValue: (date: Date | null) => void;
  setFrom: (value: string) => void;
  setWhere: (value: string) => void;
}
