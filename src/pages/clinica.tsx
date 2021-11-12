import React from 'react'
import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'
import { FaWhatsapp, FaPhone, FaRegEnvelope } from 'react-icons/fa'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Album from '../components/Album'
import SimpleMap from '../components/SimpleMap'

import { companyInfo } from '../config/companyInfo'

import {
  Container,
  BodyClinic,
  Subtitle,
  Address,
  // RowContact,
  // Icon,
  GridContact,
  Text,
  MapContainer
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
          <MapContainer>
            <SimpleMap />
          </MapContainer>
          <Address>{companyInfo.street}</Address>
          <Subtitle>Contatos</Subtitle>
          <GridContact isBreakpoint={isBreakpoint}>
            <FaWhatsapp />
            <Text>{companyInfo.whatsapp}</Text>
            <FaPhone />
            <Text>{companyInfo.phone}</Text>
            <FaRegEnvelope />
            <Text>{companyInfo.mail}</Text>
          </GridContact>
        </BodyClinic>
      </Container>
    </Layout>
  )
}

export default Clinic
