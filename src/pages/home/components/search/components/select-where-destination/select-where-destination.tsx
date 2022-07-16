import { FC } from "react";
import { Button } from "@mui/material";
import { Icon } from "components/icon";
import { DESTINATIONS, SEARCH_FIELD_NAMES } from "../../search-constants";
import { SearchDestination } from "../../search-interfaces";
import { UseSearch } from "../../search-hooks";
import { SelectDestination } from "../select-destination";

interface Props extends Pick<UseSearch, "hasFieldError" | "getHelperErrorText"> {
  options: SearchDestination[];
  name: SEARCH_FIELD_NAMES;
  id: DESTINATIONS;
  isFirstWhereDestination: boolean;
  deleteDestination: () => void;
  handleChangeWhere: any;
  value: SearchDestination;
}

export const SelectWhereDestination: FC<Props> = ({
  options,
  name,
  id,
  isFirstWhereDestination,
  handleChangeWhere,
  hasFieldError,
  getHelperErrorText,
  deleteDestination,
  value,
}) => {
  return isFirstWhereDestination ? (
    <SelectDestination
      options={options}
      name={name}
      id={id}
      handleChangeWhere={handleChangeWhere}
      hasFieldError={hasFieldError}
      getHelperErrorText={getHelperErrorText}
      value={value}
    />
  ) : (
    <SelectDestination
      options={options}
      name={name}
      id={id}
      handleChangeWhere={handleChangeWhere}
      hasFieldError={hasFieldError}
      getHelperErrorText={getHelperErrorText}
      value={value}
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
