import { reverceCoordinate } from './reverce-coordinate.ts'

export const createUrlCoordinates = (coordinates: [number, number][]) => {
  const urlCoordinates: any = []

  const coordinate = reverceCoordinate(coordinates)

  coordinate.forEach(el => urlCoordinates.push(el.join(',')))

  return urlCoordinates.join(';')
}
