import { createSlice } from '@reduxjs/toolkit'

export type CoordinatesType = {
  coordinates: [number, number][] | []
}

const initialState: CoordinatesType = {
  coordinates: [],
}

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState: initialState,
  reducers: {
    setСoordinates(state, action) {
      state.coordinates = action.payload
    },
  },
})

export const { setСoordinates } = coordinatesSlice.actions
export const coordinatesReducer = coordinatesSlice.reducer
