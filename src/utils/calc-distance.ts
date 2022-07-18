import { LANGUAGES } from "enums/localization";
import { distances } from "constants/distances";
import { SearchDestination, SearchDestinationWithKey } from "interfaces";

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

export const calcDistance = (lang: LANGUAGES, from: SearchDestination, where: SearchDestinationWithKey[]) => {
  const destinationIds: string[] = [from.id, ...where.map(({ id }) => id)];
  const destinationDistances: number[] = destinationIds.map((destinationId, index) => {
    if (index === destinationIds.length - 1) {
      return 0;
    }

    const distanceId = `${destinationId} - ${destinationIds[index + 1]}`;
    const { distance = 0 } = distances.find(({ id }) => id === distanceId) ?? {};

    return distance;
  });

  return formatDistance(
    lang,
    destinationDistances.reduce((sum, nextDistance) => sum + nextDistance, 0)
  );
};
