import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'

import { mapZoom, polylineWeight } from '../../common/constants/constants.ts'
import { calculateCenter } from '../../common/helpers/centre-calculate-route.ts'
import { reverceCoordinate } from '../../common/helpers/reverce-coordinate.ts'
import { useAppSelector } from '../../common/hooks/redux-hooks.ts'
import { getPolylineCoordinates } from '../../redux/selectors/polyline-selectors.ts'
import { getRouteRoad } from '../../redux/selectors/routes-road-selectors.ts'

import { CenterRoute } from './centre-route.tsx'
import s from './map.module.scss'

export const Map = () => {
  const coordinates = useAppSelector(getPolylineCoordinates)
  const route = useAppSelector(getRouteRoad)

  const position = reverceCoordinate(coordinates)
  const centerRoute = calculateCenter(coordinates)

  return (
    <MapContainer className={s.container} center={centerRoute} zoom={mapZoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CenterRoute coordinates={centerRoute} />
      <Polyline weight={polylineWeight} positions={position} />
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
