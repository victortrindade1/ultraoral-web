import React from 'react'
import type { NextPage } from 'next'
// import { useMediaQuery } from '@mui/material'

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

const Contato: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  const title = 'Contato'
  const subtitle = 'Gente Odontologia'
  // console.log(props.isBreakpoint)
  // const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <Layout title="Contato" description={`${title} - ${subtitle}`}>
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
          <FaBuilding color={theme.palette.primary.main} />
          <Text>CNPJ: {companyInfo.cnpj}</Text>
        </AddressContainer>
      </Container>
    </Layout>
  )
}

export default Contato
