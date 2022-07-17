import { RUdestinations } from "mock-database/destinations";
import { SearchForm } from "interfaces/search-form";
import { LANGUAGES } from "enums/localization";

const distances = [
  {
    id: `${RUdestinations[0].id} - ${RUdestinations[1].id}`,
    distance: 237,
  },
  {
    id: `${RUdestinations[0].id} - ${RUdestinations[2].id}`,
    distance: 124,
  },
  {
    id: `${RUdestinations[0].id} - ${RUdestinations[3].id}`,
    distance: 22,
  },
  {
    id: `${RUdestinations[0].id} - ${RUdestinations[4].id}`,
    distance: 241,
  },
  {
    id: `${RUdestinations[1].id} - ${RUdestinations[2].id}`,
    distance: 112,
  },
  {
    id: `${RUdestinations[1].id} - ${RUdestinations[3].id}`,
    distance: 236,
  },
  {
    id: `${RUdestinations[1].id} - ${RUdestinations[4].id}`,
    distance: 46,
  },
  {
    id: `${RUdestinations[2].id} - ${RUdestinations[3].id}`,
    distance: 124,
  },
  {
    id: `${RUdestinations[2].id} - ${RUdestinations[4].id}`,
    distance: 158,
  },
  {
    id: `${RUdestinations[3].id} - ${RUdestinations[4].id}`,
    distance: 241,
  },
  {
    id: `${RUdestinations[1].id} - ${RUdestinations[0].id}`,
    distance: 237,
  },
  {
    id: `${RUdestinations[2].id} - ${RUdestinations[0].id}`,
    distance: 124,
  },
  {
    id: `${RUdestinations[3].id} - ${RUdestinations[0].id}`,
    distance: 22,
  },
  {
    id: `${RUdestinations[4].id} - ${RUdestinations[0].id}`,
    distance: 241,
  },
  {
    id: `${RUdestinations[2].id} - ${RUdestinations[1].id}`,
    distance: 112,
  },
  {
    id: `${RUdestinations[3].id} - ${RUdestinations[1].id}`,
    distance: 236,
  },
  {
    id: `${RUdestinations[4].id} - ${RUdestinations[1].id}`,
    distance: 46,
  },
  {
    id: `${RUdestinations[3].id} - ${RUdestinations[2].id}`,
    distance: 124,
  },
  {
    id: `${RUdestinations[4].id} - ${RUdestinations[2].id}`,
    distance: 158,
  },
  {
    id: `${RUdestinations[4].id} - ${RUdestinations[3].id}`,
    distance: 241,
  },
];

const formatDistance = (lang: LANGUAGES, distance: number) => {
  const MILE = 1.609;

  if (lang === LANGUAGES.EN) {
    return `Total tour distance: ${Math.floor(MILE * distance)} miles`;
  }

  return `Общее расстояние тура: ${distance} км`;
};

export const calcDistance = (lang: LANGUAGES, form: SearchForm) => {
  const destinationIds: string[] = [];
  const destinationDistances: number[] = [];

  destinationIds.push(form.from.id);
  form.where.forEach(({ id }) => destinationIds.push(id));

  for (let i = 0; i < destinationIds.length - 1; i += 1) {
    distances.find((distance) => {
      if (`${destinationIds[i]} - ${destinationIds[i + 1]}` === distance.id) {
        destinationDistances.push(distance.distance);
      }
      return 0;
    });
  }

  return formatDistance(
    lang,
    destinationDistances.reduce((prevDistance, nextDistance) => prevDistance + nextDistance, 0)
  );
};
