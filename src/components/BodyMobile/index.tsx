import React, { useState, useEffect, useRef } from 'react'

import Link from '../../components/NoScrollLink'
// import ModalContact from '../../components/ModalContact'

import a_clinica from '../../assets/slides/a_clinica.jpg'
import especialidades from '../../assets/slides/especialidades.jpg'
import dentistsImg from '../../assets/dentists/dentists2.jpeg'
import casesImg from '../../assets/cases/case9.jpg'

import whatsapp from '../../assets/icons/whatsapp-square-color.svg'
import maps from '../../assets/icons/icon_maps.svg'
// import logo from '../../assets/logo/logo_original.svg'

import {
  Container,
  Column,
  OverlayClinicBox,
  ClinicBox,
  MapsBox,
  DentistsBox,
  WhatsAppBox,
  SpecialitiesBox,
  OverlaySpecialitiesBox,
  OverlayDentistsBox,
  OverlayClinicCasesBox,
  ClinicCasesBox,
  Text,
  ButtonContainer,
  ButtonStyled,
  Icon,
  IconButtonStyled,
  // Logo,
  BackgroundRounded
} from './styles'

const BodyMobile: React.FC = () => {
  const [isClinicBoxClicked, setIsClinicBoxClicked] = useState(false)
  const [isSpecialitiesBoxClicked, setIsSpecialitiesBoxClicked] =
    useState(false)
  const [isDentistsBoxClicked, setIsDentistsBoxClicked] = useState(false)
  const [isClinicCasesBoxClicked, setIsClinicCasesBoxClicked] = useState(false)

  const clinicBoxRef = useRef(null)
  const specialitiesBoxRef = useRef(null)
  const dentistsBoxRef = useRef(null)
  const clinicCasesBoxRef = useRef(null)

  useOutsideAlerterClinic(clinicBoxRef)
  useOutsideAlerterSpecialitites(specialitiesBoxRef)
  useOutsideAlerterDentists(dentistsBoxRef)
  useOutsideAlerterClinicCases(clinicCasesBoxRef)

  const handleClickClinicBox = () => setIsClinicBoxClicked(true)
  const handleClickSpecialitiesBox = () => setIsSpecialitiesBoxClicked(true)
  const handleClickDentistsBox = () => setIsDentistsBoxClicked(true)
  const handleClickClinicCasesBox = () => setIsClinicCasesBoxClicked(true)

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

  function useOutsideAlerterClinicCases(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClinicCasesBoxClicked(false)
        }
      }

      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [ref])
  }

  // const handleCloseModalContact = () => {
  //   setOpenModalContact(false)
  // }

  // const handleOpenModalContact = () => {
  //   setOpenModalContact(true)
  // }

  return (
    <>
      <Container>
        <Column>
          <ClinicBox
            ref={clinicBoxRef}
            onClick={handleClickClinicBox}
            image={a_clinica}
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
            image={dentistsImg}
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
            image={especialidades}
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
          <ClinicCasesBox
            ref={clinicCasesBoxRef}
            onClick={handleClickClinicCasesBox}
            image={casesImg}
          >
            <OverlayClinicCasesBox isBoxClicked={isClinicCasesBoxClicked}>
              <Text>
                <div>Casos</div>
                <div>clínicos</div>
              </Text>

              {isClinicCasesBoxClicked && (
                <Link href="/casosclinicos" passHref>
                  <ButtonContainer>
                    <ButtonStyled variant="outlined" color={'warning'}>
                      Ver mais
                    </ButtonStyled>
                  </ButtonContainer>
                </Link>
              )}
            </OverlayClinicCasesBox>
          </ClinicCasesBox>
        </Column>
      </Container>
      {/* <ModalContact open={openModalContact} onClose={handleCloseModalContact} /> */}
    </>
  )
}

export default BodyMobile
