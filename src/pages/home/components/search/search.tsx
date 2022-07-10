import { FC, useEffect } from "react";
import { Button, FormControl, Grid, Typography, Container, Autocomplete } from "@mui/material";
import { useTranslation } from "react-i18next";
// TODO(Pavel Sokolov): Add enLocale for en
import ruLocale from "date-fns/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ANCHORS, LOCALIZATION_NAMESPACES, LANGUAGES } from "enums";
import { WithSkeleton } from "hocs";
import { TextField } from "components/text-field";
import { ENdestinations, RUdestinations } from "mock-database/destinations";
import { useSearch } from "./search-hooks";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "./search-constants";
import { StyledSection } from "./search-style";
import { SearchDestination } from "./search-interfaces";

export const Search: FC = () => {
  const {
    date,
    handleChangeDate,
    handleChangeDestination,
    hasFieldError,
    getHelperErrorText,
    resetForm,
    formik: { handleSubmit },
  } = useSearch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    resetForm();
  }, [i18n.language]);

  const menuItems: SearchDestination[] = i18n.language === LANGUAGES.RU ? RUdestinations : ENdestinations;

  return (
    <StyledSection>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          id={ANCHORS.SEARCH}
          sx={{
            fontWeight: "fontWeightRegular",
            textAlign: "center",
            color: "custom.white",
            fontSize: { xs: "30px", md: "50px" },
            mb: { xs: 5, sm: 15 },
          }}
          variant="h2"
          component="h2"
        >
          {t("title.transfers", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
          <br />
          {t("title.whole-georgia", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            sx={{
              flexGrow: 1,
              justifyContent: { xs: "center" },
              backgroundColor: "custom.white",
              mx: { xs: "auto" },
              pr: 2,
              pb: 2,
              borderRadius: 4,
            }}
            spacing={2}
            xs={12}
          >
            <Grid item xs={12}>
              <FormControl fullWidth>
                <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                  <Autocomplete
                    disablePortal
                    id={DESTINATIONS.SELECT_FROM}
                    options={menuItems}
                    noOptionsText={t("label.no-options")}
                    isOptionEqualToValue={(option, value) => option.label === value.label}
                    onChange={(_, value) => {
                      handleChangeDestination(SEARCH_FIELD_NAMES.FROM, value);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={t("label.from")}
                        name={SEARCH_FIELD_NAMES.FROM}
                        error={hasFieldError(SEARCH_FIELD_NAMES.FROM)}
                        helperText={getHelperErrorText(SEARCH_FIELD_NAMES.FROM)}
                      />
                    )}
                  />
                </WithSkeleton>
              </FormControl>
            </Grid>
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
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
                <FormControl fullWidth>
                  <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                    <DatePicker
                      label={t("label.select-date")}
                      value={date}
                      inputFormat="dd/MM/yyyy"
                      onChange={handleChangeDate}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name={SEARCH_FIELD_NAMES.DATE}
                          error={hasFieldError(SEARCH_FIELD_NAMES.DATE)}
                          helperText={getHelperErrorText(SEARCH_FIELD_NAMES.DATE)}
                        />
                      )}
                      disablePast
                    />
                  </WithSkeleton>
                </FormControl>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ width: "100%", height: "100%", boxShadow: "none" }}
                >
                  {t("button.search")}
                </Button>
              </WithSkeleton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </StyledSection>
  );
};
