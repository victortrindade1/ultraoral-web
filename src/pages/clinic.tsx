import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

import { Container } from '../styles/pages/Clinic'

const title = 'A Clínica'
const subtitle =
  'Seja bem-vindo(a)! Conheça o conforto da clínica mais moderna de Campos.'

const Clinic: NextPage = () => {
  return (
    <Layout title="A Clínica" description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle title={title} subtitle={subtitle} center={true} />
        {/* <h1>Hello World</h1> */}
      </Container>
    </Layout>
  )
}

export default Clinic
