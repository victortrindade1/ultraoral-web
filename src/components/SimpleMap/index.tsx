import React from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from './Marker'

import { maps } from '../../config/maps'

import { Container } from './styles'

const SimpleMap = () => {
  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }]
        }
      ]
    }
  }

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
        defaultCenter={{ lat: maps.lat, lng: maps.lng }}
        defaultZoom={18}
        options={getMapOptions}
      >
        <Marker lat={maps.lat} lng={maps.lng} name="Gente Odontologia" />
      </GoogleMapReact>
    </Container>
  )
}

export default SimpleMap
