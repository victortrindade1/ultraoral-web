import { Facebook, Instagram } from '@material-ui/icons'
import React, { useState } from 'react'
import { FaPhone } from 'react-icons/fa'

import IResponsive from '../../interfaces/IResponsive'

import logoDev from '../../assets/icons/logo_developer.svg'

import { companyInfo } from '../../config/companyInfo'

import ModalContact from '../ModalContact'

import {
  Container,
  SocialMediaContainer,
  DevContainer,
  Text,
  Devlogo
} from './styles'

const Footer: React.FC<IResponsive> = ({ isBreakpoint }) => {
  const [openModalContact, setOpenModalContact] = useState(false)

  const handleCloseModalContact = () => {
    setOpenModalContact(false)
  }

  const handleOpenModalContact = () => {
    setOpenModalContact(true)
  }

  return (
    <>
      <ModalContact open={openModalContact} onClose={handleCloseModalContact} />
      <Container isBreakpoint={isBreakpoint}>
        <SocialMediaContainer>
          <a
            target="_blank"
            href={companyInfo.instagram_url}
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            target="_blank"
            href={companyInfo.facebook_url}
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <div onClick={handleOpenModalContact}>
            <FaPhone />
          </div>
        </SocialMediaContainer>
        <DevContainer isBreakpoint={isBreakpoint}>
          <Text>Powered by</Text>
          <a
            target="_blank"
            href={'https://www.media.dev.br'}
            rel="noopener noreferrer"
          >
            <Devlogo src={logoDev} alt={'Media Dev'} />
          </a>
        </DevContainer>
      </Container>
      <ModalContact open={openModalContact} onClose={handleCloseModalContact} />
    </>
  )
}

export default Footer
