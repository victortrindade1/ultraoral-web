import React, { useEffect, useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { Divider } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../../utils/isActiveLink'
import theme from '../../styles/theme'
import Link from '../NoScrollLink'

// import Logo from '../../assets/icons/logo_ultraoral_gold.svg'
import Logo from '../../assets/logo/logo_original.svg'

import {
  Container,
  Navigation,
  LinkContainer,
  LogoContainer,
  Image,
  ActiveBorder,
  ClickableLink
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
  },
  {
    name: 'CASOS CLÍNICOS',
    href: '/casosclinicos'
  },
  {
    name: 'CONTATO',
    href: '/contato'
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

  // Effect fade menu
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
          <Divider
            light={true}
            orientation={'vertical'}
            sx={{
              height: '40px',
              borderColor: theme.palette.primary.contrastText
            }}
          />
          <AnimateSharedLayout>
            {links.map(({ name, href }) => (
              <Link key={name} href={href}>
                <ClickableLink>
                  <a>
                    <LinkContainer>
                      {name}
                      {isActiveLink(href, router.pathname) && (
                        <ActiveBorder layoutId="teta" animate />
                      )}
                    </LinkContainer>
                  </a>
                </ClickableLink>
              </Link>
            ))}
          </AnimateSharedLayout>
        </Navigation>
      </nav>
    </Container>
  )
}

export default TopMenuDesktop
