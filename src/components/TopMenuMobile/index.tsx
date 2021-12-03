import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { useRouter } from 'next/dist/client/router'

import Link from '../NoScrollLink'
import { isActiveLink } from '../../utils/isActiveLink'

// import Logo from '../../assets/icons/logo_gold_dente.svg'
import Logo from '../../assets/logo/logo_small.svg'
// import Logo from '../../assets/logo/logo_original.svg'
import icon_clinic from '../../assets/icons/menu_clinic.svg'
import icon_dentist from '../../assets/icons/menu_corpoclinico.svg'
import icon_specialities from '../../assets/icons/menu_specialities.svg'
import icon_agendaragora from '../../assets/icons/menu_agendaragora.svg'
import icon_comochegar from '../../assets/icons/menu_comochegar.svg'
import icon_contact from '../../assets/icons/menu_contact.svg'

import {
  Container,
  MenuButtonContainer,
  LogoContainer,
  Image,
  MenuContainer,
  DrawerStyled,
  IconContainer,
  Icon,
  NameContainer
} from './styles'

const links: { name: string; icon: any; href: string }[] = [
  {
    name: 'CLÍNICA',
    href: '/clinica',
    icon: icon_clinic
  },
  {
    name: 'AGENDAR AGORA',
    href: '/agendaragora',
    icon: icon_agendaragora
  },
  {
    name: 'COMO CHEGAR',
    href: '/comochegar',
    icon: icon_comochegar
  },
  {
    name: 'ESPECIALIDADES',
    href: '/especialidades',
    icon: icon_specialities
  },
  {
    name: 'CORPO CLÍNICO',
    href: '/corpoclinico',
    icon: icon_dentist
  },
  {
    name: 'CONTATO',
    href: '/contato',
    icon: icon_contact
  }
]

const TopMenuMobile: React.FC = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false)

  const router = useRouter()

  const handleToggleMenu = () => {
    menuIsOpened ? setMenuIsOpened(false) : setMenuIsOpened(true)
  }

  return (
    <>
      <Container>
        <Link href={'/'}>
          <a>
            <LogoContainer>
              <Image src={Logo} alt={'logo'} />
            </LogoContainer>
          </a>
        </Link>
        <MenuButtonContainer>
          <Hamburger toggled={menuIsOpened} toggle={handleToggleMenu} />
        </MenuButtonContainer>
      </Container>
      <DrawerStyled
        anchor={'left'}
        open={menuIsOpened}
        onClose={handleToggleMenu}
      >
        <MenuContainer>
          {links.map(({ name, icon, href }) => (
            <Link key={href} href={href}>
              <a onClick={() => setTimeout(handleToggleMenu, 500)}>
                <IconContainer isActive={isActiveLink(href, router.pathname)}>
                  <Icon src={icon} alt={name} />
                </IconContainer>
                <NameContainer>{name}</NameContainer>
              </a>
            </Link>
          ))}
        </MenuContainer>
      </DrawerStyled>
    </>
  )
}

export default TopMenuMobile
