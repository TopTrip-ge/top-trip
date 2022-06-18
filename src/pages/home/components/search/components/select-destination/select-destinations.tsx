import { FC } from "react";
import { Select } from "@mui/material";
import { SelectDestinationTypes } from "interfaces";

export const SelectDestination: FC<SelectDestinationTypes> = ({ id, direction, setDirection, values, label }) => (
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
