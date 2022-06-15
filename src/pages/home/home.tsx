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
import { MainLayout } from "layouts/main";
import { DESTINATIONS } from "./enums/destination";
import { useHome } from "./hooks";
import { StyledSection } from "./home-style";

export const Home: FC = () => {
  const { from, where, date, setDatePickerValue, setFromTown, setWhereTown } = useHome();

  return (
    <MainLayout>
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
              margin: "80px auto 0 auto",
              justifyContent: "center",
            }}
            spacing={2}
          >
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel id={DESTINATIONS.SELECT_FROM}>Откуда</InputLabel>
                <Select id={DESTINATIONS.SELECT_FROM} value={from} label="Откуда" onChange={setFromTown}>
                  <MenuItem value={10}>Абастумани</MenuItem>
                  <MenuItem value={20}>Агара</MenuItem>
                  <MenuItem value={30}>Адигени</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel id={DESTINATIONS.SELECT_WHERE}>Куда</InputLabel>
                <Select id={DESTINATIONS.SELECT_WHERE} value={where} label="Куда" onChange={setWhereTown}>
                  <MenuItem value="Абастумани">Абастумани</MenuItem>
                  <MenuItem value="Агара">Агара</MenuItem>
                  <MenuItem value="Адигени">Адигени</MenuItem>
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
    </MainLayout>
  );
};
