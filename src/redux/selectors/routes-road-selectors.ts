import { createSelector } from '@reduxjs/toolkit'

import { RoutesDataType } from '../slices/routes-road.slice.ts'
import { RootState } from '../store.ts'

export const getRoutesRoad = (state: RootState): RoutesDataType[] => {
  return state.routesRoad
}

export const getRouteRoad = createSelector([getRoutesRoad], route => {
  return route.filter(route => route.isSelected)
})
