import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet'

import { reverceCoordinate } from '../../common/helpers/reverce-coordinate.ts'
import { useAppSelector } from '../../common/hooks/redux-hooks.ts'
import { getPolylineCoordinates } from '../../redux/selectors/polyline-selectors.ts'
import { getRouteRoad } from '../../redux/selectors/routes-road-selectors.ts'

const A = () => {
  const map = useMap()

  console.log('map center:', map)

  return null
}

export const Maps = () => {
  const coordinates = useAppSelector(getPolylineCoordinates)
  const route = useAppSelector(getRouteRoad)

  const position = reverceCoordinate(coordinates)

  return (
    <MapContainer
      style={{ overflow: 'hidden', width: '100%', height: 'calc(100vh - 129px)' }}
      center={route[0].dots[0]}
      zoom={13}
    >
      <A />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline weight={5} positions={position} />
      {position.length &&
        route[0].dots.map((point: [number, number], index: number) => {
          return (
            <Marker position={point} key={index}>
              <Popup>{point.toString()}</Popup>
            </Marker>
          )
        })}
    </MapContainer>
  )
}
