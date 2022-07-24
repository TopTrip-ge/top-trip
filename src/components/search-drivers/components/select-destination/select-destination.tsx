import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Grid, FormControl, Autocomplete, TextField, SxProps, Theme } from "@mui/material";
import { WithSkeleton } from "hocs/with-skeleton";
import { SearchDestination } from "interfaces";
import {
  DESTINATIONS,
  SEARCH_FIELD_NAMES,
  SKELETON_MIN_HEIGHT,
} from "components/search-drivers/search-drivers-constants";
import { UseSearchDriversFormik } from "components/search-drivers/hooks";

interface Props extends Pick<UseSearchDriversFormik, "hasFieldError" | "getHelperErrorText"> {
  options: SearchDestination[];
  name: SEARCH_FIELD_NAMES;
  id: DESTINATIONS;
  destinationValue: SearchDestination;
  handleChangeWhere: (value: SearchDestination | null) => void;
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

export const SelectDestination: FC<Props> = ({
  options,
  name,
  id,
  destinationValue,
  handleChangeWhere,
  hasFieldError,
  getHelperErrorText,
  children,
  sx,
}) => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} sx={sx}>
      <FormControl fullWidth>
        <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
          <Autocomplete
            disablePortal
            id={id}
            value={destinationValue}
            options={options}
            noOptionsText={t("label.no-options")}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            onChange={(_, elementValue) => {
              handleChangeWhere(elementValue);
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
