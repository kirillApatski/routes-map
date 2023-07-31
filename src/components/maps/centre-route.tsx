import { FC } from 'react'

import L, { FeatureGroup } from 'leaflet'
import { useMap } from 'react-leaflet'

type Props = {
  coordinates: [number, number][]
}
export const CenterRoute: FC<Props> = ({ coordinates }) => {
  const map = useMap()
  const group = new FeatureGroup()

  coordinates.forEach((marker: [number, number]) => {
    L.marker([marker[0], marker[1]]).addTo(group)
  })
  map.fitBounds(group.getBounds())

  return null
}
