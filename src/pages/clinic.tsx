import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'

import { Container } from '../styles/pages/Clinic'

const title = 'A Clínica'
const subtitle = 'Conheça o conforto da clínica mais moderna de Campos'

const Clinic: NextPage = () => {
  return (
    <Layout title="Home" description={`${title} - ${subtitle}`}>
      <Container>
        <h1>Hello World</h1>
      </Container>
    </Layout>
  )
}

export default Clinic
