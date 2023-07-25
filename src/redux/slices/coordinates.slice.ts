import { createAction, createSlice } from '@reduxjs/toolkit'
import { takeEvery, put, call } from 'redux-saga/effects'

import { osrmApi } from '../../api/osrm-api.ts'

export type InitialStateType = {
  coordinates: Array<number[]> | []
}

let initialState: InitialStateType = {
  coordinates: [],
}

export function* polylineWatcher() {
  yield takeEvery(getCoordinates.type, getRouteRoad)
}

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState: initialState,
  reducers: {
    getPolyline(state, action) {
      state.coordinates = action.payload
    },
  },
})

export const { getPolyline } = coordinatesSlice.actions
export const coordinatesReducer = coordinatesSlice.reducer

export function* getRouteRoad(params: any): any {
  try {
    const res = yield call(osrmApi.getOsrmRoutes, params.payload.params)

    yield put(getPolyline(res.data.routes[0].geometry.coordinates))
  } catch (error) {
    // console.log(error)
  }
}

export const getCoordinates = createAction('coordinates/getCoordinates', params => {
  return {
    payload: {
      params,
    },
  }
})
