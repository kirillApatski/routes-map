import { call, put, takeEvery } from 'redux-saga/effects'

import { osrmApi } from '../../api/osrm-api.ts'
import { getCoordinates } from '../actions/get-coordinates.ts'
import { setAppLoading } from '../slices/app.slice.ts'
import { setСoordinates } from '../slices/coordinates.slice.ts'

export function* coordinatesWatcher() {
  yield takeEvery(getCoordinates.type, getСoordinatesRoad)
}

export function* getСoordinatesRoad(actions: any): any {
  yield put(setAppLoading({ loading: true }))
  try {
    const res = yield call(osrmApi.getOsrmRoutes, actions.payload.params)

    yield put(setСoordinates(res.data.routes[0].geometry.coordinates))
    yield put(setAppLoading({ loading: false }))
  } catch (error) {
    // console.log(error)
  }
}
