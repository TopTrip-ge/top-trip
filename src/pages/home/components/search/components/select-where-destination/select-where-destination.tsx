import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Grid, FormControl, Autocomplete, TextField } from "@mui/material";
import { WithSkeleton } from "hocs/with-skeleton";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "../../search-constants";
import { useSearch } from "../../search-hooks";

interface Props {
  xs?: number;
}

export const SelectWhereDestination: FC<Props> = ({ xs = 12 }) => {
  const { handleChangeWhere, hasFieldError, getHelperErrorText, menuItems } = useSearch();

  const { t } = useTranslation();

  return (
    <Grid item xs={xs}>
      <FormControl fullWidth>
        <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
          <Autocomplete
            disablePortal
            id={DESTINATIONS.SELECT_WHERE}
            options={menuItems}
            noOptionsText={t("label.no-options")}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            onChange={(_, value) => handleChangeWhere(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t("label.where")}
                name={SEARCH_FIELD_NAMES.WHERE}
                error={hasFieldError(SEARCH_FIELD_NAMES.WHERE)}
                helperText={getHelperErrorText(SEARCH_FIELD_NAMES.WHERE)}
              />
            )}
          />
        </WithSkeleton>
      </FormControl>
    </Grid>
  );
};
