import React from 'react'
import Fade from '@mui/material/Fade'
import {
  FaWhatsapp,
  FaPhone,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa'

import { companyInfo } from '../../config/companyInfo'

import theme from '../../styles/theme'

import {
  ModalStyled,
  Container,
  ScrollableContainer,
  CloseButton,
  Title,
  AddressContainer,
  Text,
  SocialMediaContainer,
  DividerStyled
} from './styles'

interface IProps {
  open: boolean
  onClose: () => void
}

const ModalContact: React.FC<IProps> = ({ open, onClose }) => {
  return (
    <ModalStyled open={open} onClose={onClose}>
      <Fade in={open} timeout={500}>
        <Container>
          <CloseButton onClick={onClose} />
          <ScrollableContainer>
            <Title>Contato</Title>
            <AddressContainer>
              <FaWhatsapp color={theme.palette.primary.main} />
              <Text>{companyInfo.whatsapp}</Text>
              <FaPhone color={theme.palette.primary.main} />
              <Text>{companyInfo.phone}</Text>
              <FaMapMarkerAlt color={theme.palette.primary.main} />
              <Text>{companyInfo.street}</Text>
              <FaRegEnvelope color={theme.palette.primary.main} />
              <Text>{companyInfo.mail}</Text>
              <FaBuilding color={theme.palette.primary.main} />
              <Text>CNPJ: {companyInfo.cnpj}</Text>
            </AddressContainer>
            <DividerStyled />
            <SocialMediaContainer>
              <a
                target="_blank"
                href={companyInfo.instagram_url}
                rel="noopener noreferrer"
              >
                <FaInstagram color={theme.palette.secondary.light} />
              </a>
              <a
                target="_blank"
                href={companyInfo.facebook_url}
                rel="noopener noreferrer"
              >
                <FaFacebook color={theme.palette.secondary.light} />
              </a>
            </SocialMediaContainer>
          </ScrollableContainer>
        </Container>
      </Fade>
    </ModalStyled>
  )
}

export default ModalContact
