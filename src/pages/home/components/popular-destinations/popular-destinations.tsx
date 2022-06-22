import { FC } from "react";
import { Container, Grid, Typography } from "@mui/material";
import uniqid from "uniqid";
import { makeFirebaseStoragePath } from "utils";
import { Section } from "components/section";
import { DestinationCard } from "./components";

const POPULAR_DESTINATIONS = [
  {
    id: uniqid(),
    destinationsName: "Сигнаги - Бодбе",
    price: 492,
    date: "2022-06-01 - 2023-06-01",
    imageURL: makeFirebaseStoragePath(
      "destinationImages%2FdestinationImage_1.jpg?alt=media&token=6f5d138b-4384-45b0-bd03-e1846c60a11b"
    ),
  },
  {
    id: uniqid(),
    destinationsName: "Мцхета - Самтавро - Джвари",
    price: 65,
    date: "2022-06-01 - 2023-06-01",
    imageURL: makeFirebaseStoragePath(
      "destinationImages%2FdestinationImage_2.jpg?alt=media&token=27b8e746-18e8-47a4-beb3-8cf72c58a78f"
    ),
  },
  {
    id: uniqid(),
    destinationsName: "Ананури - Гонио",
    price: 327,
    date: "2022-06-01 - 2023-06-01",
    imageURL: makeFirebaseStoragePath(
      "destinationImages%2FdestinationImage_3.jpg?alt=media&token=cc8d4bd7-5e79-47ce-b5c6-883de7045c27"
    ),
  },
];

export const PopularDestinations: FC = () => {
  return (
    <Section>
      <Container>
        <Typography align="center" variant="h3" component="h3">
          Популярные направления
        </Typography>
        <Grid container spacing={2} sx={{ flexGrow: 1, mt: 8 }} direction="row" justifyContent="space-between">
          {POPULAR_DESTINATIONS.map(({ id, destinationsName, price, date, imageURL }) => (
            <Grid key={id} item xs={3}>
              <DestinationCard destinationsName={destinationsName} price={price} date={date} imageURL={imageURL} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
