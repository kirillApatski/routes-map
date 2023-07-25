import { FC } from 'react'

import { useMap } from 'react-leaflet'

import { mapZoomCenterRoute } from '../../common/constants/constants.ts'

type Props = {
  coordinates: [number, number]
}
export const CenterRoute: FC<Props> = ({ coordinates }) => {
  const map = useMap()

  map.setView(coordinates, mapZoomCenterRoute, { animate: true, duration: 0.5, noMoveStart: true })

  return null
}
