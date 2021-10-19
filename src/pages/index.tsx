import React from 'react'
import type { NextPage } from 'next'
// import Image from 'next/image'
import Head from 'next/head'

import TopMenu from '../components/TopMenu'
import CarouselDesktop from '../components/CarouselDesktop'

// import img1 from '../assets/slides/img1.jpeg'

// import Device from '../components/Device/Device'

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
  return (
    <Container>
      <Head>
        <title>Gente Odontologia</title>
      </Head>

      {/* <Device>
        {({ isMobile }) => {
          if (isMobile) return <div>My Mobile View</div>
          return <div>My Desktop View</div>
        }}
      </Device> */}

      <TopMenu />
      <CarouselDesktopContainer>
        <CarouselDesktop />
      </CarouselDesktopContainer>

      {/* <ImageContainer>
        <Image
          src={img1}
          alt="img1"
          width={900}
          height={500}
          // layout="responsive"
        />
      </ImageContainer> */}

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
    </Container>
  )
}

export default Home
