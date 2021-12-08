import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Button from '@material-ui/core/Button'

import {
  FaWhatsapp,
  FaPhone,
  FaRegEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

import Link from '../components/NoScrollLink'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import SimpleMap from '../components/SimpleMap'

import { maps } from '../config/maps'
import { companyInfo } from '../config/companyInfo'

import theme from '../styles/theme'
import IResponsive from '../interfaces/IResponsive'

import {
  Container,
  MapContainer,
  ButtonContainer,
  MapButtonLabel,
  AddressContainer,
  Text
} from '../styles/pages/ComoChegar'
import Logo from '../components/Logo'

const ComoChegar: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  const [mapsLink, setMapsLink] = useState('')

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
    <Layout title={`${title} - Gente`} description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle
          title={title}
          subtitle={subtitle}
          isBreakpoint={isBreakpoint}
        />
        <MapContainer>
          <SimpleMap />
          {isBreakpoint && (
            <Link href={mapsLink}>
              <ButtonContainer>
                <Button variant="contained" color={'warning'} fullWidth>
                  <FaMapMarkerAlt />
                  <MapButtonLabel>Abrir no App</MapButtonLabel>
                </Button>
              </ButtonContainer>
            </Link>
          )}
        </MapContainer>
        <AddressContainer isBreakpoint={isBreakpoint}>
          <FaMapMarkerAlt color={theme.palette.primary.main} />
          <Text>{companyInfo.street}</Text>
          <FaWhatsapp color={theme.palette.primary.main} />
          <Text>{companyInfo.whatsapp}</Text>
          <FaPhone color={theme.palette.primary.main} />
          <Text>{companyInfo.phone}</Text>
          <FaRegEnvelope color={theme.palette.primary.main} />
          <Text>{companyInfo.mail}</Text>
        </AddressContainer>
      </Container>
      <Logo />
    </Layout>
  )
}

export default ComoChegar
