import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import {
  FaWhatsapp,
  FaPhone,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaBuilding
  // FaInstagram,
  // FaFacebook
} from 'react-icons/fa'
import { useMediaQuery } from '@mui/material'

import { companyInfo } from '../config/companyInfo'
import theme from '../styles/theme'

import {
  Container,
  AddressContainer,
  Text
  // SocialMediaContainer,
  // DividerStyled
} from '../styles/pages/Contato'

const Contato: NextPage = () => {
  const title = 'Contato'
  const subtitle = 'Gente Odontologia'

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <Layout title="Contato" description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle title={title} subtitle={subtitle} />
        <AddressContainer isBreakpoint={isBreakpoint}>
          <FaWhatsapp color={theme.palette.primary.main} />
          <Text>{companyInfo.whatsapp}</Text>
          <FaPhone color={theme.palette.primary.main} />
          <Text>{companyInfo.phone}</Text>
          <FaMapMarkerAlt color={theme.palette.primary.main} />
          <Text>{companyInfo.street}</Text>
          <FaRegEnvelope color={theme.palette.primary.main} />
          <Text>{companyInfo.mail}</Text>
          <FaBuilding color={theme.palette.primary.main} />
          <Text>CNPJ: {companyInfo.cnpj}</Text>
        </AddressContainer>
        {/* <DividerStyled />
        <SocialMediaContainer>
          <a
            target="_blank"
            href={companyInfo.instagram_url}
            rel="noopener noreferrer"
          >
            <FaInstagram color={theme.palette.secondary.light} />
          </a>
          <a
            target="_blank"
            href={companyInfo.facebook_url}
            rel="noopener noreferrer"
          >
            <FaFacebook color={theme.palette.secondary.light} />
          </a>
        </SocialMediaContainer>
       */}
      </Container>
    </Layout>
  )
}

export default Contato
