import React, { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useMediaQuery } from '@mui/material'

import TopMenu from '../components/TopMenu'
import CarouselDesktop from '../components/CarouselDesktop'

import img1 from '../assets/slides/img1.jpeg'
import img3 from '../assets/slides/img3.jpeg'
import img4 from '../assets/slides/img4.png'

import whatsapp from '../assets/icons/whatsapp-square-color.svg'
import maps from '../assets/icons/icon_maps.svg'

import {
  Container,
  CarouselDesktopContainer,
  Body,
  Column,
  OverlayClinicBox,
  ClinicBox,
  MapsBox,
  DentistsBox,
  WhatsAppBox,
  SpecialitiesBox,
  OverlaySpecialitiesBox,
  OverlayDentistsBox,
  ContactBox,
  Text,
  ButtonContainer,
  ButtonStyled,
  Icon,
  IconButtonStyled,
  BackgroundRounded
} from '../styles/pages/Home'

const Home: NextPage = () => {
  const [isClinicBoxClicked, setIsClinicBoxClicked] = useState(false)
  const [isSpecialitiesBoxClicked, setIsSpecialitiesBoxClicked] =
    useState(false)
  const [isDentistsBoxClicked, setIsDentistsBoxClicked] = useState(false)

  const clinicBoxRef = useRef(null)
  const specialitiesBoxRef = useRef(null)
  const dentistsBoxRef = useRef(null)

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  useOutsideAlerterClinic(clinicBoxRef)
  useOutsideAlerterSpecialitites(specialitiesBoxRef)
  useOutsideAlerterDentists(dentistsBoxRef)

  const handleClickClinicBox = () => setIsClinicBoxClicked(true)
  const handleClickSpecialitiesBox = () => setIsSpecialitiesBoxClicked(true)
  const handleClickDentistsBox = () => setIsDentistsBoxClicked(true)

  function useOutsideAlerterClinic(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClinicBoxClicked(false)
        }
      }

      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [ref])
  }

  function useOutsideAlerterSpecialitites(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSpecialitiesBoxClicked(false)
        }
      }

      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [ref])
  }

  function useOutsideAlerterDentists(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDentistsBoxClicked(false)
        }
      }

      document.addEventListener('click', handleClickOutside)
      return () => {
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
            <ClinicBox
              ref={clinicBoxRef}
              onClick={handleClickClinicBox}
              image={img1}
            >
              <OverlayClinicBox isBoxClicked={isClinicBoxClicked}>
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
            <MapsBox>
              <IconButtonStyled>
                <BackgroundRounded>
                  <Icon src={maps} alt={'maps'} />
                </BackgroundRounded>
              </IconButtonStyled>
            </MapsBox>
            <DentistsBox
              ref={dentistsBoxRef}
              onClick={handleClickDentistsBox}
              image={img4}
            >
              <OverlayDentistsBox isBoxClicked={isDentistsBoxClicked}>
                <Text>
                  <div>Corpo</div>
                  <div>clínico</div>
                </Text>
                <ButtonContainer>
                  <ButtonStyled variant="outlined" color={'warning'}>
                    Ver mais
                  </ButtonStyled>
                </ButtonContainer>
              </OverlayDentistsBox>
            </DentistsBox>
          </Column>
          <Column>
            <WhatsAppBox>
              <IconButtonStyled>
                <Icon src={whatsapp} alt={'whatsapp'} />
              </IconButtonStyled>
            </WhatsAppBox>
            <SpecialitiesBox
              ref={specialitiesBoxRef}
              onClick={handleClickSpecialitiesBox}
              image={img3}
            >
              <OverlaySpecialitiesBox isBoxClicked={isSpecialitiesBoxClicked}>
                <Text>
                  <span>Especialidades</span>
                </Text>
                <ButtonContainer>
                  <ButtonStyled variant="outlined" color={'warning'}>
                    Ver mais
                  </ButtonStyled>
                </ButtonContainer>
              </OverlaySpecialitiesBox>
            </SpecialitiesBox>
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
