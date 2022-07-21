import { FC, useEffect, ReactElement } from "react";
import uniqid from "uniqid";
import { Button, FormControl, Grid, Autocomplete } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FieldArray, FieldArrayRenderProps, FormikContextType, FormikProvider } from "formik";
import ruLocale from "date-fns/locale/ru";
import enUSLocale from "date-fns/locale/en-US";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { WithSkeleton } from "hocs";
import { LANGUAGES } from "enums/localization";
import { TextField } from "components/text-field";
import { Icon } from "components/icon";
import { SearchDestination, SearchForm } from "interfaces";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "../../search-constants";
import { SelectWhereDestination } from "../select-where-destination/select-where-destination";

interface Props {
  date: Date | null;
  handleChangeDate: (value: Date | null) => void;
  handleChangeFrom: (value: SearchDestination | null) => void;
  handleChangeWhere: (arrayHelpers: FieldArrayRenderProps, index: number, value: SearchDestination | null) => void;
  hasFieldError: (field: SEARCH_FIELD_NAMES) => boolean;
  getHelperErrorText: (field: SEARCH_FIELD_NAMES) => string | null;
  resetForm: () => void;
  handleSubmit: () => void;
  values: SearchForm;
  options: SearchDestination[];
  formik: FormikContextType<any>;
}

export const SearchComponent: FC<Props & JSX.IntrinsicAttributes> = ({
  date,
  handleChangeDate,
  handleChangeFrom,
  handleChangeWhere,
  hasFieldError,
  getHelperErrorText,
  resetForm,
  handleSubmit,
  values,
  options,
  ...rest
}): ReactElement => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    resetForm();
  }, [i18n.language]);

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
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
              <Autocomplete
                key={`from_${i18n.language}`}
                disablePortal
                id={DESTINATIONS.SELECT_FROM}
                options={options}
                noOptionsText={t("label.no-options")}
                isOptionEqualToValue={(option, value) => option.label === value.label}
                onChange={(_, value) => {
                  handleChangeFrom(value);
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
        <FormikProvider value={rest.formik}>
          <FieldArray
            name={SEARCH_FIELD_NAMES.WHERE}
            render={(arrayHelpers) => (
              <>
                {values.where.map((_, index) => (
                  <SelectWhereDestination
                    key={`${values.where[index].key}${i18n.language}`}
                    id={`${DESTINATIONS.SELECT_WHERE}.${index}` as DESTINATIONS}
                    name={`${SEARCH_FIELD_NAMES.WHERE}.${index}` as SEARCH_FIELD_NAMES}
                    getHelperErrorText={getHelperErrorText}
                    handleChangeWhere={(value) => handleChangeWhere(arrayHelpers, index, value)}
                    hasFieldError={hasFieldError}
                    deleteDestination={() => arrayHelpers.remove(index)}
                    options={options}
                    isFirstWhereDestination={index === 0}
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
            adapterLocale={i18n.language === LANGUAGES.RU ? ruLocale : enUSLocale}
          >
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
  );
};
