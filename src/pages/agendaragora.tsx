import React from 'react'
import type { NextPage } from 'next'
import { Button } from '@mui/material'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Link from '../components/NoScrollLink'
import Logo from '../components/Logo'

import { companyInfo } from '../config/companyInfo'
import theme from '../styles/theme'

import IResponsive from '../interfaces/IResponsive'

import {
  Container,
  ButtonContainer,
  ContactContainer,
  Text
} from '../styles/pages/AgendarAgora'

const AgendarAgora: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  const title = 'Agendar agora'
  const subtitle = 'Vamos agendar uma consulta? Envie agora uma mensagem.'

  return (
    <Layout title={`${title} - Gente`} description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle
          title={title}
          subtitle={subtitle}
          isBreakpoint={isBreakpoint}
        />

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
      <Logo />
    </Layout>
  )
}

export default AgendarAgora
