import React from 'react'
import type { NextPage } from 'next'
import { Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Link from '../components/NoScrollLink'

import { companyInfo } from '../config/companyInfo'

import theme from '../styles/theme'

import {
  Container,
  ButtonContainer,
  ContactContainer,
  Text
} from '../styles/pages/AgendarAgora'

const AgendarAgora: NextPage = () => {
  // const isBreakpoint = useMediaQuery('(max-width:768px)')
  const title = 'Agendar agora'
  const subtitle = 'Vamos agendar uma consulta? Envie agora uma mensagem.'

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <Layout title="Agendar" description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle title={title} subtitle={subtitle} />

        <Link
          href={`https://api.whatsapp.com/send?phone=${companyInfo.whatsapp_url}&text=Olá, gostaria de agendar uma consulta!`}
        >
          <ButtonContainer isBreakpoint={isBreakpoint}>
            <Button variant="outlined" color={'warning'} fullWidth>
              Enviar mensagem
            </Button>
          </ButtonContainer>
        </Link>

        <ContactContainer isBreakpoint={isBreakpoint}>
          <FaWhatsapp color={theme.palette.primary.main} />
          <Text>{companyInfo.whatsapp}</Text>
          <FaPhone color={theme.palette.primary.main} />
          <Text>{companyInfo.phone}</Text>
        </ContactContainer>
      </Container>
    </Layout>
  )
}

export default AgendarAgora
