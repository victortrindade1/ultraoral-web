import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Layout from '../components/Layout'

const BodyDesktop = dynamic(() => import('../components/BodyDesktop')) as any
const BodyMobile = dynamic(() => import('../components/BodyMobile')) as any

// import  from

import IResponsive from '../interfaces/IResponsive'

import { Container } from '../styles/pages/Home'

const title = 'Home'
const subtitle =
  'Clínica Odontológica com tratamento Humanizado. Agende agora uma consulta com a GENTE, e experimente o melhor tratamento odontológico de Campos!'

const Home: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  return (
    <Layout
      title={`${title} - Gente Odontologia`}
      description={`${title} - ${subtitle}`}
    >
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
