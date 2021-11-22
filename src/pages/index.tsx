import React, { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
// import { useMediaQuery } from '@mui/material'

import Link from '../components/NoScrollLink'
import Layout from '../components/Layout'
import BodyDesktop from '../components/BodyDesktop'
import ModalContact from '../components/ModalContact'

import IResponsive from '../interfaces/IResponsive'

import img1 from '../assets/slides/img1.jpeg'
import img3 from '../assets/slides/img3.jpeg'
import img4 from '../assets/slides/img4.png'

import whatsapp from '../assets/icons/whatsapp-square-color.svg'
import maps from '../assets/icons/icon_maps.svg'
import logo from '../assets/icons/logo_ultraoral_gold.svg'

import {
  Container,
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

const Home: NextPage<IResponsive> = ({ isBreakpoint }: IResponsive) => {
  const [isClinicBoxClicked, setIsClinicBoxClicked] = useState(false)
  const [isSpecialitiesBoxClicked, setIsSpecialitiesBoxClicked] =
    useState(false)
  const [isDentistsBoxClicked, setIsDentistsBoxClicked] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [openModalContact, setOpenModalContact] = useState(false)

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

  useEffect(() => {
    isBreakpoint ? setIsMobile(true) : setIsMobile(false)
  }, [isBreakpoint])

  const handleCloseModalContact = () => {
    setOpenModalContact(false)
  }

  const handleOpenModalContact = () => {
    setOpenModalContact(true)
  }

  return (
    <Layout title="Gente Odontologia" description={`${title} - ${subtitle}`}>
      <Container>
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
                      <Link href="/clinica" passHref>
                        <ButtonStyled variant="outlined" color={'warning'}>
                          Ver mais
                        </ButtonStyled>
                      </Link>
                    )}
                  </ButtonContainer>
                </OverlayClinicBox>
              </ClinicBox>
              <MapsBox>
                <Link href="/comochegar" passHref>
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
                  {isDentistsBoxClicked && (
                    <Link href="/corpoclinico" passHref>
                      <ButtonContainer>
                        <ButtonStyled variant="outlined" color={'warning'}>
                          Ver mais
                        </ButtonStyled>
                      </ButtonContainer>
                    </Link>
                  )}
                </OverlayDentistsBox>
              </DentistsBox>
            </Column>
            <Column>
              <WhatsAppBox>
                <Link href={'/agendaragora'}>
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

                  {isSpecialitiesBoxClicked && (
                    <Link href="/especialidades" passHref>
                      <ButtonContainer>
                        <ButtonStyled variant="outlined" color={'warning'}>
                          Ver mais
                        </ButtonStyled>
                      </ButtonContainer>
                    </Link>
                  )}
                </OverlaySpecialitiesBox>
              </SpecialitiesBox>
              <ContactBox>
                <IconButtonStyled onClick={handleOpenModalContact}>
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
        <ModalContact
          open={openModalContact}
          onClose={handleCloseModalContact}
        />
      </Container>
    </Layout>
  )
}

export default Home
