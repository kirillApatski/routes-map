import { createSlice } from '@reduxjs/toolkit'

type InitialStateType = {
  key: React.Key
  name: string
  dotOne: number[]
  dotTwo: number[]
  dotThree: number[]
}

const initialState: InitialStateType[] = [
  {
    key: '1',
    name: 'Маршрут №1',
    dotOne: [59.84660399, 30.29496392],
    dotTwo: [59.82934196, 30.42423701],
    dotThree: [59.83567701, 30.38064206],
  },
  {
    key: '2',
    name: 'Маршрут №2',
    dotOne: [59.82934196, 30.42423701],
    dotTwo: [59.82761295, 30.41705607],
    dotThree: [59.84660399, 30.29496392],
  },
  {
    key: '3',
    name: 'Маршрут №3',
    dotOne: [59.83567701, 30.38064206],
    dotTwo: [59.83660399, 30.29496492],
    dotThree: [59.82761295, 30.41705607],
  },
]

const routesRoadSlice = createSlice({
  name: 'route-road',
  initialState,
  reducers: {},
})

export const routesRoadReducer = routesRoadSlice.reducer
