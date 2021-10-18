import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import TopMenu from '../components/TopMenu'
// import Device from '../components/Device/Device'

import {
  Container,
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
      <p style={{ color: '#f4f4f4' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        nostrum ratione ut. Temporibus quod at, mollitia odit pariatur itaque
        fuga fugiat quas necessitatibus impedit nostrum! Vitae doloremque nam
        magnam a? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia, amet. Sapiente, eveniet provident ea aspernatur accusantium
        possimus corporis? Ullam repellendus dolor iure consectetur pariatur
        sequi cum labore a architecto accusantium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. At molestias eos esse. Laudantium corporis
        blanditiis iusto. Iste minima, exercitationem autem odio, quibusdam
        reprehenderit, neque vitae deserunt libero optio sed! Quidem. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Minima consectetur
        nemo est quis impedit iste praesentium dolorum. Delectus, facere ullam
        expedita asperiores eum vero eligendi provident non? Soluta, commodi
        sit?
      </p>
    </Container>
  )
}

export default Home
