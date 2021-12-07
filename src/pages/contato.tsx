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
} from 'react-icons/fa'

import { companyInfo } from '../config/companyInfo'
import theme from '../styles/theme'

import IResponsive from '../interfaces/IResponsive'

import { Container, AddressContainer, Text } from '../styles/pages/Contato'
import Logo from '../components/Logo'

const Contato: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  const title = 'Contato'
  const subtitle = 'Gente Odontologia'

  return (
    <Layout title={`${title} - Gente`} description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle
          title={title}
          subtitle={subtitle}
          isBreakpoint={isBreakpoint}
        />
        <AddressContainer isBreakpoint={isBreakpoint}>
          <FaWhatsapp color={theme.palette.primary.main} />
          <Text>{companyInfo.whatsapp}</Text>
          <FaPhone color={theme.palette.primary.main} />
          <Text>{companyInfo.phone}</Text>
          <FaMapMarkerAlt color={theme.palette.primary.main} />
          <Text>{companyInfo.street}</Text>
          <FaRegEnvelope color={theme.palette.primary.main} />
          <Text>{companyInfo.mail}</Text>
          {companyInfo.cnpj !== '' && (
            <>
              <FaBuilding color={theme.palette.primary.main} />
              <Text>CNPJ: {companyInfo.cnpj}</Text>
            </>
          )}
        </AddressContainer>
        <Logo />
      </Container>
    </Layout>
  )
}

export default Contato
