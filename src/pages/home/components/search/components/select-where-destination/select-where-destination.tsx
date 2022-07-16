import { FC } from "react";
import { Button } from "@mui/material";
import { Icon } from "components/icon";
import { DESTINATIONS, SEARCH_FIELD_NAMES } from "../../search-constants";
import { SearchDestination } from "../../search-interfaces";
import { UseSearch } from "../../search-hooks";
import { SelectDestination } from "../select-destination";

interface Props extends Pick<UseSearch, "hasFieldError" | "getHelperErrorText"> {
  menuItems: SearchDestination[];
  name: SEARCH_FIELD_NAMES;
  id: DESTINATIONS;
  isFirstWhereDestination: boolean;
  deleteDestination: () => void;
  handleChangeWhere: any;
  label: SearchDestination;
}

export const SelectWhereDestination: FC<Props> = ({
  menuItems,
  name,
  id,
  isFirstWhereDestination,
  handleChangeWhere,
  hasFieldError,
  getHelperErrorText,
  deleteDestination,
  label,
}) => {
  return isFirstWhereDestination ? (
    <SelectDestination
      menuItems={menuItems}
      name={name}
      id={id}
      handleChangeWhere={handleChangeWhere}
      hasFieldError={hasFieldError}
      getHelperErrorText={getHelperErrorText}
      label={label}
    />
  ) : (
    <SelectDestination
      menuItems={menuItems}
      name={name}
      id={id}
      handleChangeWhere={handleChangeWhere}
      hasFieldError={hasFieldError}
      getHelperErrorText={getHelperErrorText}
      label={label}
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
