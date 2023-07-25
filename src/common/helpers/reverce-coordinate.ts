export const reverceCoordinate = (coordinates: [number, number][]): [number, number][] => {
  return coordinates.map(([lat, lng]) => [lng, lat])
}
