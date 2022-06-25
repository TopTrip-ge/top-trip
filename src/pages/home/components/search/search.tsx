import { FC } from "react";
import { Button, FormControl, Grid, Typography, TextField, Container, Autocomplete } from "@mui/material";
import { useTranslation } from "react-i18next";
import ruLocale from "date-fns/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SearchProps } from "interfaces";
import { sortCollection } from "utils";
import { ANCHORS, LOCALIZATION_NAMESPACES } from "enums";
import { WithSkeleton } from "hocs";
import { useDestinations } from "./search-hooks";
import { DESTINATIONS, SKELETON_MIN_HEIGHT } from "./search-constants";
import { StyledSection } from "./search-style";

export const Search: FC<SearchProps> = ({ date, setDatePickerValue }) => {
  const destinations = useDestinations();
  const { t, i18n } = useTranslation();

  const menuItems = sortCollection(destinations, "name").map(({ id, name }) => ({
    label: name,
    id,
  }));

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
        <Grid
          container
          sx={{
            flexGrow: 1,
            justifyContent: { xs: "center" },
            backgroundColor: "custom.white",
            gap: 2,
            py: 2,
            borderRadius: 4,
            px: { xs: 2 },
          }}
          direction="row"
          columns={{ xs: 5, sm: 7, md: 11 }}
        >
          <Grid item xs={5}>
            <FormControl fullWidth>
              <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                <Autocomplete
                  key={i18n.language}
                  disablePortal
                  id={DESTINATIONS.SELECT_FROM}
                  options={menuItems}
                  noOptionsText={t("label.no-options")}
                  renderInput={(params) => <TextField {...params} label={t("label.from")} />}
                />
              </WithSkeleton>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth>
              <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                <Autocomplete
                  key={i18n.language}
                  disablePortal
                  id={DESTINATIONS.SELECT_WHERE}
                  options={menuItems}
                  noOptionsText={t("label.no-options")}
                  renderInput={(params) => <TextField {...params} label={t("label.where")} />}
                />
              </WithSkeleton>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
              <FormControl fullWidth>
                <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                  <DatePicker
                    label={t("label.select-date")}
                    value={date}
                    inputFormat="dd/MM/yyyy"
                    onChange={setDatePickerValue}
                    renderInput={(params) => <TextField {...params} />}
                    disablePast
                  />
                </WithSkeleton>
              </FormControl>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={5}>
            <WithSkeleton animation="pulse" isLoading={false} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
              <Button variant="contained" size="large" sx={{ width: "100%", height: "100%", boxShadow: "none" }}>
                {t("button.search")}
              </Button>
            </WithSkeleton>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};
