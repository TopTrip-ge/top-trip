import { FC } from "react";
import { Button, FormControl, Grid, Typography, TextField, Container, Autocomplete } from "@mui/material";
import ruLocale from "date-fns/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useCollection } from "firebase-common";
import { Destination, SearchProps } from "interfaces";
import { sortCollection, collectDataFromCollection } from "utils";
import { ANCHORS } from "enums";
import { WithSkeleton } from "hocs";
import { LABELS, DESTINATIONS, SKELETON_MIN_HEIGHT } from "./search-constants";
import { StyledSection } from "./search-style";

export const Search: FC<SearchProps> = ({ date, setDatePickerValue }) => {
  const [collection, isLoading] = useCollection<Destination>("destinations");

  const destinations = sortCollection(collectDataFromCollection(collection), "name").map(({ id, name }) => ({
    label: name,
    id,
  }));

  return (
    <StyledSection>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          id={ANCHORS.SEARCH}
          sx={{
            fontWeight: 400,
            textAlign: "center",
            color: "common.white",
            fontSize: { xs: "30px", md: "50px" },
            mb: { xs: 5, sm: 15 },
          }}
          variant="h2"
          component="h2"
        >
          Трансферы и однодневные туры
          <br />
          по всей Грузии
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
              <WithSkeleton animation="pulse" isLoading={isLoading} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                <Autocomplete
                  disablePortal
                  id={DESTINATIONS.SELECT_FROM}
                  options={destinations}
                  noOptionsText={LABELS.NO_OPTIONS_TEXT}
                  renderInput={(params) => <TextField {...params} label={LABELS.SELECT_FROM} />}
                />
              </WithSkeleton>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth>
              <WithSkeleton animation="pulse" isLoading={isLoading} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                <Autocomplete
                  disablePortal
                  id={DESTINATIONS.SELECT_WHERE}
                  options={destinations}
                  noOptionsText={LABELS.NO_OPTIONS_TEXT}
                  renderInput={(params) => <TextField {...params} label={LABELS.SELECT_WHERE} />}
                />
              </WithSkeleton>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
              <FormControl fullWidth>
                <WithSkeleton animation="pulse" isLoading={isLoading} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
                  <DatePicker
                    label={LABELS.SELECT_DATE}
                    value={date}
                    inputFormat="dd/MM/yyyy"
                    onChange={setDatePickerValue}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </WithSkeleton>
              </FormControl>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={5}>
            <WithSkeleton animation="pulse" isLoading={isLoading} sx={{ minHeight: SKELETON_MIN_HEIGHT }}>
              <Button variant="contained" size="large" sx={{ width: "100%", height: "100%", boxShadow: "none" }}>
                Поиск
              </Button>
            </WithSkeleton>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};
