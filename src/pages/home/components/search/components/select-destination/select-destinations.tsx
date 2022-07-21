import { FC, ReactNode, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { Grid, FormControl, Autocomplete, TextField, SxProps, Theme } from "@mui/material";
import { WithSkeleton } from "hocs/with-skeleton";
import { searchValuesStateSelector } from "store/selectors";
import { SearchDestination } from "interfaces";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "../../search-constants";
import { UseSearch } from "../search-component/search-component-hooks";

interface Props extends Pick<UseSearch, "hasFieldError" | "getHelperErrorText"> {
  options: SearchDestination[];
  name: SEARCH_FIELD_NAMES;
  id: DESTINATIONS;
  handleChangeWhere: (value: SearchDestination | null) => void;
  children?: ReactNode;
  sx?: SxProps<Theme>;
  index: number;
}

export const SelectDestination: FC<Props> = ({
  options,
  name,
  id,
  handleChangeWhere,
  hasFieldError,
  getHelperErrorText,
  children,
  sx,
  index,
}) => {
  const { t } = useTranslation();
  const [autocompleteValue, setAutocompleteValue] = useState<SearchDestination | null>(null);
  const stateValues = useRecoilValue(searchValuesStateSelector);

  useEffect(() => {
    if (stateValues) {
      setAutocompleteValue(stateValues.where[index]);
    }
  }, [stateValues]);

  return (
    <Grid item xs={12} sx={sx}>
      <FormControl fullWidth>
        <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
          <Autocomplete
            disablePortal
            id={id}
            value={autocompleteValue || null}
            options={options}
            noOptionsText={t("label.no-options")}
            isOptionEqualToValue={(option, elementValue) => option.label === elementValue.label}
            onChange={(_, itemValue) => {
              setAutocompleteValue(itemValue);
              handleChangeWhere(itemValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ backgroundColor: "custom.white" }}
                label={t("label.where")}
                name={name}
                error={hasFieldError(name)}
                helperText={getHelperErrorText(name)}
              />
            )}
          />
        </WithSkeleton>
      </FormControl>
      {children}
    </Grid>
  );
};
