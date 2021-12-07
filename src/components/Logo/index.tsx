import React from 'react'

import logo from '../../assets/logo/logo_original.svg'

import { Container, Image } from './styles'

const Logo: React.FC = () => {
  return (
    <Container>
      <Image src={logo} alt={'Logomarca Gente Odontologia Humanizada'} />
    </Container>
  )
}

export default Logo
