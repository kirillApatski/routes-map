import { call, put, takeEvery } from 'redux-saga/effects'

import { osrmApi } from '../../api/osrm-api.ts'
import { getCoordinates, GetCoordinatesType } from '../actions/get-coordinates.ts'
import { setAppError, setAppLoading } from '../slices/app.slice.ts'
import { setСoordinates } from '../slices/coordinates.slice.ts'

export function* coordinatesWatcher() {
  yield takeEvery(getCoordinates.type, getСoordinatesRoad)
}

export function* getСoordinatesRoad(actions: GetCoordinatesType): any {
  yield put(setAppLoading({ loading: true }))
  try {
    const res = yield call(osrmApi.getOsrmRoutes, actions.payload.params)

    yield put(setСoordinates(res.data.routes[0].geometry.coordinates))
    yield put(setAppLoading({ loading: false }))
  } catch (error: any) {
    yield put(setAppError({ error: error.response.data.message, code: error.response.data.code }))
    yield put(setAppLoading({ loading: false }))
  }
}
