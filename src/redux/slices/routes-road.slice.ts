import { createSlice } from '@reduxjs/toolkit'

export type RoutesDataType = {
  key: React.Key
  name: string
  dotsName: string
  dots: [number, number][]
  isSelected: boolean
}

const initialState: RoutesDataType[] = [
  {
    key: '1',
    name: 'Маршрут №1',
    dotsName: 'dotsOne',
    dots: [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
      [59.83567701, 30.38064206],
    ],
    isSelected: true,
  },
  {
    key: '2',
    name: 'Маршрут №2',
    dotsName: 'dotsTwo',
    dots: [
      [59.82934196, 30.42423701],
      [59.82761295, 30.41705607],
      [59.84660399, 30.29496392],
    ],
    isSelected: false,
  },
  {
    key: '3',
    name: 'Маршрут №3',
    dotsName: 'dotsThree',
    dots: [
      [59.83567701, 30.38064206],
      [59.83660399, 30.29496492],
      [59.82761295, 30.41705607],
    ],
    isSelected: false,
  },
]

const routesRoadSlice = createSlice({
  name: 'route-road',
  initialState,
  reducers: {
    setSelectedRow(state, actions) {
      state.map(route =>
        route.key === actions.payload ? (route.isSelected = true) : (route.isSelected = false)
      )
    },
  },
})

export const { setSelectedRow } = routesRoadSlice.actions
export const routesRoadReducer = routesRoadSlice.reducer
