import { all } from 'redux-saga/effects'

import { coordinatesWatcher } from './get-coordinates-road.ts'

export function* rootWatcher() {
  yield all([coordinatesWatcher()])
}
