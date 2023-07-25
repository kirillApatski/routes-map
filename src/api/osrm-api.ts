import { instance } from './instance/instance.ts'

export const osrmApi = {
  getOsrmRoutes(routePoints: number[]): any {
    return instance.get<any>(`${routePoints}?overview=full&geometries=geojson`)
  },
}
