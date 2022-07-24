import { FC } from "react";
import { Button } from "@mui/material";
import { Icon } from "components/icon";
import { SearchDestination } from "interfaces";
import { UseSearchDriversFormik } from "components/search-drivers/hooks";
import { DESTINATIONS, SEARCH_FIELD_NAMES } from "components/search-drivers/search-drivers-constants";
import { SelectDestination } from "../select-destination";

interface Props extends Pick<UseSearchDriversFormik, "hasFieldError" | "getHelperErrorText"> {
  options: SearchDestination[];
  name: SEARCH_FIELD_NAMES;
  id: DESTINATIONS;
  isFirstWhereDestination: boolean;
  value: SearchDestination | null;
  deleteDestination: () => void;
  handleChangeWhere: (value: SearchDestination | null) => void;
}

export const SelectWhere: FC<Props> = ({
  options,
  name,
  id,
  isFirstWhereDestination,
  value,
  handleChangeWhere,
  hasFieldError,
  getHelperErrorText,
  deleteDestination,
}) => {
  return isFirstWhereDestination ? (
    <SelectDestination
      options={options}
      name={name}
      id={id}
      destinationValue={value}
      handleChangeWhere={handleChangeWhere}
      hasFieldError={hasFieldError}
      getHelperErrorText={getHelperErrorText}
    />
  ) : (
    <SelectDestination
      options={options}
      name={name}
      id={id}
      destinationValue={value}
      handleChangeWhere={handleChangeWhere}
      hasFieldError={hasFieldError}
      getHelperErrorText={getHelperErrorText}
      sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
    >
      <Button
        sx={{
          backgroundColor: "custom.white",
          color: "custom.grey",
          "&:hover": { backgroundColor: "custom.white" },
          mb: getHelperErrorText(name) ? "20px" : 0,
        }}
        onClick={deleteDestination}
      >
        <Icon name="Clear" />
      </Button>
    </SelectDestination>
  );
};
