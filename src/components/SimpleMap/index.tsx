import React from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from './Marker'

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
        defaultCenter={{ lat: 11.0168, lng: 76.9558 }}
        defaultZoom={11}
        options={getMapOptions}
      >
        <Marker lat={11.0168} lng={76.9558} name="Gente Odontologia" />
      </GoogleMapReact>
    </Container>
  )
}

export default SimpleMap
