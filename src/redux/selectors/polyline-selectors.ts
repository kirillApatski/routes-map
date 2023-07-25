import { RootState } from '../store.ts'

export const getPolylineCoordinates = (state: RootState): [number, number][] => {
  return state.polyline.coordinates
}
