import { FC } from "react";
import { Button } from "@mui/material";
import { Icon } from "components/icon";
import { SearchDestination } from "interfaces";
import { DESTINATIONS, SEARCH_FIELD_NAMES } from "../../search-constants";
import { UseSearch } from "../search-component/search-component-hooks";
import { SelectDestination } from "../select-destination";

interface Props extends Pick<UseSearch, "hasFieldError" | "getHelperErrorText"> {
  options: SearchDestination[];
  name: SEARCH_FIELD_NAMES;
  id: DESTINATIONS;
  isFirstWhereDestination: boolean;
  deleteDestination: () => void;
  handleChangeWhere: (value: SearchDestination | null) => void;
  index: number;
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
  index,
}) => {
  return isFirstWhereDestination ? (
    <SelectDestination
      options={options}
      name={name}
      id={id}
      handleChangeWhere={handleChangeWhere}
      hasFieldError={hasFieldError}
      getHelperErrorText={getHelperErrorText}
      index={index}
    />
  ) : (
    <SelectDestination
      options={options}
      name={name}
      id={id}
      handleChangeWhere={handleChangeWhere}
      hasFieldError={hasFieldError}
      getHelperErrorText={getHelperErrorText}
      sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
      index={index}
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
