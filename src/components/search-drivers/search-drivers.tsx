import { FC } from "react";
import uniqid from "uniqid";
// TODO(Pavel Sokolov): Add enLocale for en
import ruLocale from "date-fns/locale/ru";
import { Autocomplete, Button, FormControl, Grid, TextField } from "@mui/material";
import { FieldArray, FormikProvider } from "formik";
import { WithSkeleton } from "hocs/with-skeleton";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Icon } from "components/icon";
import { areEmptyFieldsInObject } from "utils/are-empty-fields-in-object";
import { DESTINATIONS, SEARCH_FIELD_NAMES, SKELETON_MIN_HEIGHT } from "./search-drivers-constants";
import { SelectWhere } from "./components";
import { useSearchDrivers } from "./hooks";

export const SearchDrivers: FC = () => {
  const {
    date,
    formik,
    menuItems,
    lang,
    getHelperErrorText,
    handleChangeDate,
    handleChangeFrom,
    handleChangeWhere,
    hasFieldError,
    t,
  } = useSearchDrivers();
  const { handleSubmit, values } = formik;

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
                value={areEmptyFieldsInObject(values.from ?? {}, ["id", "label"]) ? null : values.from}
                id={DESTINATIONS.SELECT_FROM}
                options={menuItems}
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
        <FormikProvider value={formik}>
          <FieldArray
            name={SEARCH_FIELD_NAMES.WHERE}
            render={(arrayHelpers) => (
              <>
                {values.where.map((destinationWhere, index) => (
                  <SelectWhere
                    key={`${values.where[index].key}${lang}`}
                    value={areEmptyFieldsInObject(destinationWhere ?? {}, ["id", "label"]) ? null : destinationWhere}
                    id={`${DESTINATIONS.SELECT_WHERE}.${index}` as DESTINATIONS}
                    name={`${SEARCH_FIELD_NAMES.WHERE}.${index}` as SEARCH_FIELD_NAMES}
                    getHelperErrorText={getHelperErrorText}
                    handleChangeWhere={(value) => handleChangeWhere(arrayHelpers, index, value)}
                    hasFieldError={hasFieldError}
                    deleteDestination={() => arrayHelpers.remove(index)}
                    options={menuItems}
                    isFirstWhereDestination={index === 0}
                  />
                ))}
                <Grid item xs={12}>
                  <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                    <Button
                      variant="contained"
                      onClick={() => arrayHelpers.push({ id: "", label: "", key: uniqid() })}
                      disabled={values.where[values.where.length - 1].id?.length < 3}
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
  );
};
