import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Grid, FormControl, Autocomplete, TextField, Button } from "@mui/material";
import { WithSkeleton } from "hocs/with-skeleton";
import { Icon } from "components/icon";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "../../search-constants";
import { SearchDestination } from "../../search-interfaces";
import { UseSearch } from "../../search-hooks";

interface Props extends Pick<UseSearch, "hasFieldError" | "getHelperErrorText"> {
  menuItems: SearchDestination[];
  name: SEARCH_FIELD_NAMES;
  id: DESTINATIONS;
  isFirstWhereDestination: boolean;
  deleteDestination: () => void;
  handleChangeWhere: any;
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
}) => {
  const { t } = useTranslation();

  return isFirstWhereDestination ? (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
          <Autocomplete
            disablePortal
            id={id}
            options={menuItems}
            noOptionsText={t("label.no-options")}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            onChange={(_, value) => handleChangeWhere(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t("label.where")}
                name={name}
                error={hasFieldError(name)}
                helperText={getHelperErrorText(name)}
              />
            )}
          />
        </WithSkeleton>
      </FormControl>
    </Grid>
  ) : (
    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <FormControl fullWidth>
        <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
          <Autocomplete
            disablePortal
            id={id}
            options={menuItems}
            noOptionsText={t("label.no-options")}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            onChange={(_, value) => handleChangeWhere(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t("label.where")}
                name={name}
                error={hasFieldError(name)}
                helperText={getHelperErrorText(name)}
              />
            )}
          />
        </WithSkeleton>
      </FormControl>
      <Button
        sx={{
          backgroundColor: "custom.white",
          color: "custom.grey",
          "&:hover": { backgroundColor: "custom.white" },
        }}
        onClick={deleteDestination}
      >
        <Icon name="Clear" />
      </Button>
    </Grid>
  );
};
