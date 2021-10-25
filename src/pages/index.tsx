import React, { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useMediaQuery } from '@mui/material'

import TopMenu from '../components/TopMenu'
import CarouselDesktop from '../components/CarouselDesktop'

import img1 from '../assets/slides/img1.jpeg'
import whatsapp from '../assets/icon_whatsapp_colored.svg'
// import { WhatsApp } from '@material-ui/icons'

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
  Text,
  ButtonContainer,
  ButtonStyled,
  Icon
} from '../styles/pages/Home'

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
            <ClinicBox ref={wrapperRef} onClick={handleClickBox} image={img1}>
              <OverlayClinicBox isBoxClicked={isBoxClicked}>
                <Text>
                  <div>Conheça a</div>
                  <div>clínica</div>
                </Text>
                <ButtonContainer>
                  <ButtonStyled variant="outlined" color={'warning'}>
                    Ver mais
                  </ButtonStyled>
                </ButtonContainer>
              </OverlayClinicBox>
            </ClinicBox>
            <MapsBox />
            <DentistsBox />
          </Column>
          <Column>
            <WhatsAppBox>
              <Icon src={whatsapp} alt={'whatsapp'} />
            </WhatsAppBox>
            <SpecialitiesBox />
            <ContactBox />
          </Column>
        </Body>
      ) : (
        <>
          {/* // Layout Desktop */}
          <CarouselDesktopContainer>
            <CarouselDesktop />
          </CarouselDesktopContainer>

          {/* <div
            style={{
              height: '800px',
              width: '100%',
              background: '#fff',
              display: 'block'
            }}
          >
            Hey
          </div> */}
        </>
      )}
    </Container>
  )
}

export default Home
