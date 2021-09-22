import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Topmenu from '../components/Topmenu'

import { Container } from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Topmenu />
    </Container>
  )
}

export default Home
