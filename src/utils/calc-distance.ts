import { SearchForm } from "interfaces/search-form";
import { LANGUAGES } from "enums/localization";
import { distances } from "constants/distances";

const convertToMiles = (distance: number) => {
  const MILE = 1.609;
  return Math.floor(MILE * distance);
};

const formatDistance = (lang: LANGUAGES, distance: number) => {
  if (lang === LANGUAGES.EN) {
    return `Total tour distance: ${convertToMiles(distance)} miles`;
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
