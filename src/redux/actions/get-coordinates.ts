import { createAction } from '@reduxjs/toolkit'

export const getCoordinates = createAction('coordinates/getCoordinates', params => {
  return {
    payload: {
      params,
    },
  }
})

export type GetCoordinatesType = ReturnType<typeof getCoordinates>
