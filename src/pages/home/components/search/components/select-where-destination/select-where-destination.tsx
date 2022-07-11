import { FC } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Grid, FormControl, Autocomplete, TextField } from "@mui/material";
import { WithSkeleton } from "hocs/with-skeleton";
import { LANGUAGES } from "enums";
import { RUdestinations, ENdestinations } from "mock-database/destinations";
import { SearchDestination } from "../../search-interfaces";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "../../search-constants";
import { useSearch } from "../../search-hooks";

export const SelectWhereDestination: FC = () => {
  const menuItems: SearchDestination[] = i18next.language === LANGUAGES.RU ? RUdestinations : ENdestinations;
  const { handleChangeDestination, hasFieldError, getHelperErrorText } = useSearch();
  const { t } = useTranslation();
  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
          <Autocomplete
            disablePortal
            id={DESTINATIONS.SELECT_WHERE}
            options={menuItems}
            noOptionsText={t("label.no-options")}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            onChange={(_, value) => {
              handleChangeDestination(SEARCH_FIELD_NAMES.WHERE, value);
            }}
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
