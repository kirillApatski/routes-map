import { instance } from './instance/instance.ts'

export const osrmApi = {
  getOsrmRoutes(routePoints: number[]) {
    return instance.get<ResponseType>(`${routePoints}?overview=full&geometries=geojson`)
  },
}

type ResponseType = {
  code: string
  routes: [
    {
      geometry: {
        coordinates: [number, number][]
        waypoints: WaypointsType[]
      }
    },
  ]
}
type WaypointsType = {
  hint: string
  distance: number
  name: string
  location: [number, number]
}
