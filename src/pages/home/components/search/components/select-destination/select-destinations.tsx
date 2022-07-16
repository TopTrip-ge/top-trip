import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Grid, FormControl, Autocomplete, TextField, SxProps, Theme } from "@mui/material";
import { WithSkeleton } from "hocs/with-skeleton";
import { SearchDestination } from "../../search-interfaces";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "../../search-constants";
import { UseSearch } from "../../search-hooks";

interface Props extends Pick<UseSearch, "hasFieldError" | "getHelperErrorText"> {
  options: SearchDestination[];
  name: SEARCH_FIELD_NAMES;
  id: DESTINATIONS;
  handleChangeWhere: any;
  value: SearchDestination;
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

export const SelectDestination: FC<Props> = ({
  options,
  name,
  id,
  handleChangeWhere,
  hasFieldError,
  getHelperErrorText,
  value,
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
            defaultValue={{ id: "", label: "" }}
            value={value}
            options={options}
            noOptionsText={t("label.no-options")}
            isOptionEqualToValue={(option, elementValue) => option.id === elementValue.id}
            onChange={(_, elementValue) => handleChangeWhere(elementValue)}
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
      {children}
    </Grid>
  );
};
