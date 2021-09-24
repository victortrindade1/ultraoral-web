import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '@material-ui/core/Button'
// import Topmenu from '../components/Topmenu'

import { Container } from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>
      {/* <Topmenu /> */}
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  )
}

export default Home
