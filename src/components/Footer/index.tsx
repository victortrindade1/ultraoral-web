import { Facebook, Instagram } from '@material-ui/icons'
import React from 'react'

import IResponsive from '../../interfaces/IResponsive'

import logoDev from '../../assets/icons/logo_developer.svg'

import { companyInfo } from '../../config/companyInfo'

import {
  Container,
  SocialMediaContainer,
  DevContainer,
  Text,
  Devlogo
} from './styles'

const Footer: React.FC<IResponsive> = ({ isBreakpoint }) => {
  return (
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
  )
}

export default Footer
