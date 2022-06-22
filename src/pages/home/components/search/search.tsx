import { FC } from "react";
import { Button, FormControl, Grid, Typography, TextField, Container, Autocomplete } from "@mui/material";
import ruLocale from "date-fns/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useCollection } from "firebase-common";
import { Destination, SearchProps } from "interfaces";
import { sortCollection, collectDataFromCollection } from "utils";
import { StyledSection } from "./search-style";
import { LABELS, DESTINATIONS } from "./search-constants";

export const Search: FC<SearchProps> = ({ date, setDatePickerValue }) => {
  const [collection, isLoading] = useCollection<Destination>("destinations");

  const destinations = sortCollection(collectDataFromCollection(collection), "name").map(({ id, name }) => ({
    label: name,
    id,
  }));

  return (
    <StyledSection>
      <Container>
        <Typography sx={{ fontWeight: 400, textAlign: "center", color: "common.white" }} variant="h2" component="h2">
          Трансферы и однодневные туры
          <br />
          по всей Грузии
        </Typography>
        <Grid
          container
          sx={{
            backgroundColor: "custom.white",
            padding: "16px",
            borderRadius: "16px",
            margin: "25vh auto 0 auto",
            justifyContent: "center",
          }}
          spacing={2}
        >
          {isLoading ? (
            <Typography variant="h5">Loading...</Typography>
          ) : (
            <>
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <Autocomplete
                    disablePortal
                    id={DESTINATIONS.SELECT_FROM}
                    options={destinations}
                    noOptionsText={LABELS.NO_OPTIONS_TEXT}
                    renderInput={(params) => <TextField {...params} label={LABELS.SELECT_FROM} />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <Autocomplete
                    disablePortal
                    id={DESTINATIONS.SELECT_WHERE}
                    options={destinations}
                    noOptionsText={LABELS.NO_OPTIONS_TEXT}
                    renderInput={(params) => <TextField {...params} label={LABELS.SELECT_WHERE} />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
                  <FormControl fullWidth>
                    <DatePicker
                      label={LABELS.SELECT_DATE}
                      value={date}
                      inputFormat="dd/MM/yyyy"
                      onChange={setDatePickerValue}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </FormControl>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={5}>
                <Button variant="contained" size="large" sx={{ width: "100%", height: "100%", boxShadow: "none" }}>
                  Поиск
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </StyledSection>
  );
};
