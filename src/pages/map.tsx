import React from 'react'
import type { NextPage } from 'next'

import {
  FaWhatsapp,
  FaPhone,
  FaRegEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { useMediaQuery } from '@mui/material'

import Link from '../components/NoScrollLink'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import { maps } from '../config/maps'
import { companyInfo } from '../config/companyInfo'

import theme from '../styles/theme'

import {
  Container,
  MapContainer,
  ButtonContainer,
  MapButton,
  MapButtonLabel,
  AddressContainer,
  Text
} from '../styles/pages/Map'
import SimpleMap from '../components/SimpleMap'
import { useEffect } from 'react'
import { useState } from 'react'

const Map: NextPage = () => {
  const [mapsLink, setMapsLink] = useState('')

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  const title = 'Como chegar'
  const subtitle =
    'Situada no coração da Pelinca, a clínica possui acesso fácil e rápido!'

  // Update state link to Google Maps or Apple Maps
  useEffect(() => {
    if (
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPod') != -1 ||
      navigator.platform.indexOf('iPad') != -1
    )
      setMapsLink(
        `maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${maps.lat},${maps.lng}`
      )
    else
      setMapsLink(
        `https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${maps.lat},${maps.lng}`
      )
  }, [])

  return (
    <Layout title="A Clínica" description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle title={title} subtitle={subtitle} />
        <MapContainer>
          <SimpleMap />
          {isBreakpoint && (
            <Link href={mapsLink}>
              <ButtonContainer>
                <MapButton variant="contained" color={'warning'}>
                  <FaMapMarkerAlt />
                  <MapButtonLabel>Abrir no App</MapButtonLabel>
                </MapButton>
              </ButtonContainer>
            </Link>
          )}
        </MapContainer>
        <AddressContainer isBreakpoint={isBreakpoint}>
          <FaMapMarkerAlt color={theme.palette.primary.main} />
          <Text>
            {/* Rua Barão do Amazonas, 158 - Parque Rosario, Campos dos Goytacazes -
            RJ, 28025-496 */}
            {companyInfo.street}
          </Text>
          <FaWhatsapp color={theme.palette.primary.main} />
          <Text>{companyInfo.whatsapp}</Text>
          <FaPhone color={theme.palette.primary.main} />
          <Text>{companyInfo.phone}</Text>
          <FaRegEnvelope color={theme.palette.primary.main} />
          <Text>{companyInfo.mail}</Text>
        </AddressContainer>
      </Container>
    </Layout>
  )
}

export default Map
