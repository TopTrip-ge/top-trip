import { FC } from "react";
import { Button, FormControl, Grid, InputLabel, MenuItem, Typography, TextField, Container } from "@mui/material";
import ruLocale from "date-fns/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useCollection } from "firebase-common";
import { Destination, SearchProps } from "interfaces";
import { sortCollection, collectDataFromCollection } from "utils";
import { DESTINATIONS } from "enums";
import { SelectDestination } from "./components";
import { StyledSection } from "./search-style";

export const Search: FC<SearchProps> = ({ date, from, setDatePickerValue, setFrom, setWhere, where }) => {
  const [collection, isLoading] = useCollection<Destination>("destinations");

  const destinations = sortCollection(collectDataFromCollection(collection), "name").map(({ id, name }) => (
    <MenuItem key={id} value={name}>
      {name}
    </MenuItem>
  ));

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
            backgroundColor: "common.white",
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
                  <InputLabel id={DESTINATIONS.SELECT_FROM}>Откуда</InputLabel>
                  <SelectDestination
                    id={DESTINATIONS.SELECT_FROM}
                    direction={from}
                    setDirection={setFrom}
                    values={destinations}
                    label="Откуда"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <InputLabel id={DESTINATIONS.SELECT_WHERE}>Куда</InputLabel>
                  <SelectDestination
                    id={DESTINATIONS.SELECT_WHERE}
                    direction={where}
                    setDirection={setWhere}
                    values={destinations}
                    label="Куда"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
                  <FormControl fullWidth>
                    <DatePicker
                      label="Выберите дату"
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
