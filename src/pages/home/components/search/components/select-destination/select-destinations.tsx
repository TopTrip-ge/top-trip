import { FC, ReactNode } from "react";
import { Select } from "@mui/material";

interface Props {
  id: string;
  direction: string;
  setDirection: (value: string) => void;
  values: ReactNode;
  label: string;
}

// TODO(Pavel Sokolov): Add [virtualization](https://mui.com/material-ui/react-list/#virtualized-list)
// to optimize the select field here to delete flashing
export const SelectDestination: FC<Props> = ({ id, direction, setDirection, values, label }) => (
  <Select
    MenuProps={{ style: { height: "60vh" } }}
    id={id}
    value={direction}
    label={label}
    onChange={(event) => setDirection(event.target?.value)}
  >
    {values}
  </Select>
);
