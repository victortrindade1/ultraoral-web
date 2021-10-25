import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Logo from '../../assets/logo_ultraoral_gold.svg'

import { Container, Navigation, LogoContainer, Image } from './styles'

const TopMenuDesktop: React.FC = () => {
  const [isOnTop, setIsOnTop] = useState(true)

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsOnTop(false)
    } else {
      setIsOnTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container isOnTop={isOnTop}>
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
