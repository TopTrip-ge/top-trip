import { FC } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import ruLocale from "date-fns/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useCollection } from "firebase-common/hooks/use-collection";
import { SearchProps } from "../../interfaces";
import { DESTINATIONS } from "../../enums";
import { StyledSection } from "./search-style";

export const Search: FC<SearchProps> = ({ date, from, setDatePickerValue, setFromTown, setWhereTown, where }) => {
  const { destinations } = useCollection();

  const destinationsArray = destinations?.docs.map((doc) => {
    const destination = doc.data().name;
    return (
      <MenuItem key={doc.id} value={destination}>
        {destination}
      </MenuItem>
    );
  });
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
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel id={DESTINATIONS.SELECT_FROM}>Откуда</InputLabel>
              <Select
                MenuProps={{ style: { height: "60vh" } }}
                id={DESTINATIONS.SELECT_FROM}
                value={from}
                label="Откуда"
                onChange={setFromTown}
              >
                {destinationsArray}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel id={DESTINATIONS.SELECT_WHERE}>Куда</InputLabel>
              <Select
                MenuProps={{ style: { height: "60vh" } }}
                id={DESTINATIONS.SELECT_WHERE}
                value={where}
                label="Куда"
                onChange={setWhereTown}
              >
                {destinationsArray}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
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
            <Button variant="contained" size="large" sx={{ width: "100%", height: "100%" }}>
              Поиск
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};
