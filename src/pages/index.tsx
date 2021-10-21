import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useMediaQuery } from '@mui/material'

import TopMenu from '../components/TopMenu'
import CarouselDesktop from '../components/CarouselDesktop'

import {
  Container,
  CarouselDesktopContainer,
  Body,
  Column,
  ClinicBox,
  MapsBox,
  DentistsBox,
  WhatsAppBox,
  SpecialitiesBox,
  ContactBox
} from '../styles/pages/Home'

const Home: NextPage = () => {
  const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <Container>
      <Head>
        <title>Gente Odontologia</title>
      </Head>

      <TopMenu />

      {isBreakpoint ? (
        // Layout Mobile
        <Body>
          <Column>
            <ClinicBox />
            <MapsBox />
            <DentistsBox />
          </Column>
          <Column>
            <WhatsAppBox />
            <SpecialitiesBox />
            <ContactBox />
          </Column>
        </Body>
      ) : (
        // Layout Desktop
        <CarouselDesktopContainer>
          <CarouselDesktop />
        </CarouselDesktopContainer>
      )}
    </Container>
  )
}

export default Home
