import React from 'react'
import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Album from '../components/Album'
import SimpleMap from '../components/SimpleMap'

// import { WhatsApp, Phone, Mail } from '@material-ui/icons'

import { FaWhatsapp, FaPhone, FaRegEnvelope } from 'react-icons/fa'

import {
  Container,
  BodyClinic,
  Subtitle,
  Address,
  // RowContact,
  // Icon,
  GridContact,
  Text
} from '../styles/pages/Clinic'

const Clinic: NextPage = () => {
  const isBreakpoint = useMediaQuery('(max-width:768px)')

  const title = 'A Clínica'
  const subtitle =
    'Seja bem-vindo(a)! Conheça o conforto da clínica mais moderna de Campos.'

  return (
    <Layout title="A Clínica" description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle title={title} subtitle={subtitle} />
        <BodyClinic isBreakpoint={isBreakpoint}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem
            obcaecati iusto blanditiis voluptate saepe aliquam culpa porro
            labore voluptatibus. Minima hic quaerat, laudantium dolore repellat
            quidem fugit atque deleniti.
          </p>
          <Subtitle>Álbum de fotos</Subtitle>
          <Album />
          <Subtitle>Como chegar</Subtitle>
          <SimpleMap />
          <Address>
            Rua Barão do Amazonas, 158 - Parque Rosario, Campos dos Goytacazes -
            RJ, 28025-496
          </Address>
          <Subtitle>Contatos</Subtitle>
          <GridContact isBreakpoint={isBreakpoint}>
            <FaWhatsapp />
            <Text>(22) 99999-9999</Text>
            <FaPhone />
            <Text>(22) 2222-2222</Text>
            <FaRegEnvelope />
            <Text>contato@genteodontologia.com.br</Text>
          </GridContact>
        </BodyClinic>
      </Container>
    </Layout>
  )
}

export default Clinic
