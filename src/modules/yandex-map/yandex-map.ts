export const YMap = {
  getCoordinatesOfPlace: (place: string): Promise<any> => ymaps.geocode(place),
  getDistanceBetweenCoordinates: (firstPlace: [number, number], secondPlace: [number, number]): Promise<any> =>
    ymaps.coordSystem.geo.getDistance(firstPlace, secondPlace),
};
