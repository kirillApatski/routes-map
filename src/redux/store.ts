import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootWatcher } from './sagas/root-watcher.ts'
import { appReducer } from './slices/app.slice.ts'
import { coordinatesReducer } from './slices/coordinates.slice.ts'
import { routesRoadReducer } from './slices/routes-road.slice.ts'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  app: appReducer,
  routesRoad: routesRoadReducer,
  polyline: coordinatesReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootWatcher)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
