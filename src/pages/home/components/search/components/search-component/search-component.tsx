import { FC } from "react";
import uniqid from "uniqid";
import ruLocale from "date-fns/locale/ru";
import enUSLocale from "date-fns/locale/en-US";
import { useRecoilValue } from "recoil";
import { Button, FormControl, Grid, Autocomplete } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FieldArray, FormikProvider } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { WithSkeleton } from "hocs";
import { searchValuesStateSelector } from "store/selectors";
import { LANGUAGES } from "enums/localization";
import { TextField } from "components/text-field";
import { Icon } from "components/icon";
import { SearchDestination } from "interfaces";
import { RUdestinations, ENdestinations } from "mock-database/destinations";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "../../search-constants";
import { SelectWhereDestination } from "../select-where-destination/select-where-destination";
import { useSearch } from "./search-component-hooks";

interface Props {
  lang: LANGUAGES;
}

export const SearchComponent: FC<Props> = ({ lang }) => {
  const { t } = useTranslation();
  const stateValues = useRecoilValue(searchValuesStateSelector);
  const {
    date,
    handleChangeDate,
    handleChangeFrom,
    handleChangeWhere,
    hasFieldError,
    getHelperErrorText,
    formik,
    from,
  } = useSearch(stateValues);
  const { handleSubmit, values } = formik;

  const menuItems: SearchDestination[] = lang === LANGUAGES.RU ? RUdestinations : ENdestinations;
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        sx={{
          flexGrow: 1,
          width: "100%",
          justifyContent: { xs: "center" },
          backgroundColor: "custom.white",
          mx: { xs: "auto" },
          pr: 2,
          pb: 2,
          borderRadius: 4,
          boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
              <Autocomplete
                disablePortal
                id={DESTINATIONS.SELECT_FROM}
                value={from || null}
                options={menuItems}
                noOptionsText={t("label.no-options")}
                isOptionEqualToValue={(option, value) => option.label === value.label}
                onChange={(_, value) => {
                  handleChangeFrom(value as SearchDestination);
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
        <FormikProvider value={formik}>
          <FieldArray
            name={SEARCH_FIELD_NAMES.WHERE}
            render={(arrayHelpers) => (
              <>
                {values.where.map((_, index) => (
                  <SelectWhereDestination
                    key={`${values.where[index].key}${lang}`}
                    id={`${DESTINATIONS.SELECT_WHERE}.${index}` as DESTINATIONS}
                    name={`${SEARCH_FIELD_NAMES.WHERE}.${index}` as SEARCH_FIELD_NAMES}
                    getHelperErrorText={getHelperErrorText}
                    handleChangeWhere={(value) => handleChangeWhere(arrayHelpers, index, value)}
                    hasFieldError={hasFieldError}
                    deleteDestination={() => arrayHelpers.remove(index)}
                    options={menuItems}
                    isFirstWhereDestination={index === 0}
                    index={index}
                  />
                ))}
                <Grid item xs={12}>
                  <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                    <Button
                      variant="contained"
                      onClick={() => arrayHelpers.push({ id: "", label: "", key: uniqid() })}
                      disabled={values.where[values.where.length - 1].id.length < 3}
                      size="large"
                      sx={{
                        width: "100%",
                        height: "100%",
                        boxShadow: "none",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "custom.grey",
                        backgroundColor: "custom.white",
                        color: "custom.grey",
                        "&:hover": {
                          backgroundColor: "custom.white",
                          boxShadow: "none",
                          color: "custom.black",
                          borderColor: "custom.black",
                        },
                        fontSize: { xs: "12px", sm: "16px" },
                      }}
                    >
                      <Icon name="Add" /> {t("button.add")}
                    </Button>
                  </WithSkeleton>
                </Grid>
              </>
            )}
          />
        </FormikProvider>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={lang === LANGUAGES.RU ? ruLocale : enUSLocale}
          >
            <FormControl fullWidth>
              <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                <DatePicker
                  key={String(date)}
                  value={date}
                  label={t("label.select-date")}
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
  );
};
