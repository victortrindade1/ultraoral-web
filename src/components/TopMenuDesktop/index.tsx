import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/logo_ultraoral_gold.svg'

import { Container, Navigation, LogoContainer } from './styles'

const TopMenuDesktop: React.FC = () => {
  return (
    <Container>
      <nav>
        <Navigation>
          <Link href={'/'}>
            <a>
              <LogoContainer>
                <Image src={Logo} alt={'logo'} />
              </LogoContainer>
            </a>
          </Link>
          <Link href={'/'}>
            <a>CLÍNICA</a>
          </Link>
          <Link href={'/'}>
            <a>AGENDAR AGORA</a>
          </Link>
          <Link href={'/'}>
            <a>COMO CHEGAR</a>
          </Link>
          <Link href={'/'}>
            <a>ESPECIALIDADES</a>
          </Link>
          <Link href={'/'}>
            <a>CORPO CLÍNICO</a>
          </Link>
          <Link href={'/'}>
            <a>CONTATO</a>
          </Link>
        </Navigation>
      </nav>
    </Container>
  )
}

export default TopMenuDesktop
