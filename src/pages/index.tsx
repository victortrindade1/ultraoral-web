import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'
import BodyDesktop from '../components/BodyDesktop'
import BodyMobile from '../components/BodyMobile'

import IResponsive from '../interfaces/IResponsive'

import { Container } from '../styles/pages/Home'

const title = 'Gente Odontologia'
const subtitle = 'Venha sorrir com a gente!'

const Home: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  return (
    <Layout title="Gente Odontologia" description={`${title} - ${subtitle}`}>
      <Container>
        {isBreakpoint ? (
          // Layout Mobile
          <BodyMobile />
        ) : (
          // Layout Desktop
          <BodyDesktop />
        )}
      </Container>
    </Layout>
  )
}

export default Home
