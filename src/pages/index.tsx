import React, { useState, useEffect, useRef } from 'react'
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
  OverlayClinicBox,
  MapsBox,
  DentistsBox,
  WhatsAppBox,
  SpecialitiesBox,
  ContactBox,
  Text
} from '../styles/pages/Home'
import { Button } from '@material-ui/core'

const Home: NextPage = () => {
  const [isBoxClicked, setIsBoxClicked] = useState(false)

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  const handleClickBox = () => {
    setIsBoxClicked(true)
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsBoxClicked(false)
        }
      }

      // Bind the event listener
      document.addEventListener('click', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('click', handleClickOutside)
      }
    }, [ref])
  }

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
            <ClinicBox ref={wrapperRef} onClick={handleClickBox}>
              <OverlayClinicBox isBoxClicked={isBoxClicked}>
                <Text>Conheça a clínica</Text>
                <Button>Ver mais</Button>
              </OverlayClinicBox>
            </ClinicBox>
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
