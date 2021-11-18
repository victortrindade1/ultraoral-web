import React, { useEffect, useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../../utils/isActiveLink'

import Link from '../NoScrollLink'

import Logo from '../../assets/icons/logo_ultraoral_gold.svg'

import {
  Container,
  Navigation,
  LinkContainer,
  LogoContainer,
  Image,
  ActiveBorder
} from './styles'

const links: { name: string; href: string }[] = [
  {
    name: 'CLÍNICA',
    href: '/clinica'
  },
  {
    name: 'AGENDAR AGORA',
    href: '/agendaragora'
  },
  {
    name: 'COMO CHEGAR',
    href: '/comochegar'
  },
  {
    name: 'ESPECIALIDADES',
    href: '/especialidades'
  },
  {
    name: 'CORPO CLÍNICO',
    href: '/corpoclinico'
  }
]

const TopMenuDesktop: React.FC = () => {
  const router = useRouter()

  const [isOnTop, setIsOnTop] = useState(true)

  // Effect fade menu
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
          <AnimateSharedLayout>
            {links.map(({ name, href }) => (
              <Link key={name} href={href}>
                <a>
                  <LinkContainer>
                    {name}
                    {isActiveLink(href, router.pathname) && (
                      <ActiveBorder layoutId="teta" animate />
                      // <motion.div
                      //   layoutId="navigation-underline"
                      //   className="navigation-underline"
                      //   animate
                      // />
                    )}
                  </LinkContainer>
                </a>
              </Link>
            ))}
          </AnimateSharedLayout>
          {/* <Link href={'/'}>
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
          </Link> */}
        </Navigation>
      </nav>
    </Container>
  )
}

export default TopMenuDesktop
