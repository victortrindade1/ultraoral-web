import React, { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'

import Link from '../components/NoScrollLink'
import Layout from '../components/Layout'
// import CarouselDesktop from '../components/CarouselDesktop'
import BodyDesktop from '../components/BodyDesktop'

// import getMobileOS from '../utils/getMobileOS'
import img1 from '../assets/slides/img1.jpeg'
import img3 from '../assets/slides/img3.jpeg'
import img4 from '../assets/slides/img4.png'

import whatsapp from '../assets/icons/whatsapp-square-color.svg'
import maps from '../assets/icons/icon_maps.svg'
import logo from '../assets/icons/logo_ultraoral_gold.svg'

import {
  Container,
  // CarouselDesktopContainer,
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
  Logo,
  BackgroundRounded
} from '../styles/pages/Home'

const title = 'Gente Odontologia'
const subtitle = 'Venha sorrir com a gente!'

const Home: NextPage = () => {
  const [isClinicBoxClicked, setIsClinicBoxClicked] = useState(false)
  const [isSpecialitiesBoxClicked, setIsSpecialitiesBoxClicked] =
    useState(false)
  const [isDentistsBoxClicked, setIsDentistsBoxClicked] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const clinicBoxRef = useRef(null)
  const specialitiesBoxRef = useRef(null)
  const dentistsBoxRef = useRef(null)

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

  // const handleNavigate = () => {}

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  useEffect(() => {
    isBreakpoint ? setIsMobile(true) : setIsMobile(false)
  }, [isBreakpoint])

  return (
    <Layout title="Gente Odontologia" description={`${title} - ${subtitle}`}>
      <Container>
        {/* <TopMenu /> */}

        {isMobile ? (
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
                    {isClinicBoxClicked && (
                      <Link href="/clinic" passHref>
                        <ButtonStyled variant="outlined" color={'warning'}>
                          Ver mais
                        </ButtonStyled>
                      </Link>
                    )}
                  </ButtonContainer>
                </OverlayClinicBox>
              </ClinicBox>
              <MapsBox>
                <Link href="/map" passHref>
                  <IconButtonStyled>
                    <BackgroundRounded>
                      <Icon src={maps} alt={'maps'} />
                    </BackgroundRounded>
                  </IconButtonStyled>
                </Link>
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
                <Link
                  href={`https://api.whatsapp.com/send?phone=22999999999&text=Olá, gostaria de agendar uma consulta!`}
                >
                  <IconButtonStyled>
                    <Icon src={whatsapp} alt={'whatsapp'} />
                  </IconButtonStyled>
                </Link>
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
              <ContactBox>
                <IconButtonStyled>
                  <Logo src={logo} alt={'logo'} />
                </IconButtonStyled>
              </ContactBox>
            </Column>
          </Body>
        ) : (
          <>
            <BodyDesktop />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Home
