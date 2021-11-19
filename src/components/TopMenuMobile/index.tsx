import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
// import Drawer from '@mui/material/Drawer'

import Link from '../NoScrollLink'

import Logo from '../../assets/icons/logo_gold_dente.svg'

import {
  Container,
  MenuButtonContainer,
  LogoContainer,
  Image,
  MenuContainer,
  DrawerStyled
} from './styles'

const TopMenuMobile: React.FC = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false)

  const handleToggleMenu = () => {
    menuIsOpened ? setMenuIsOpened(false) : setMenuIsOpened(true)
  }

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

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
        <MenuContainer>teste</MenuContainer>
      </DrawerStyled>
    </>
  )
}

export default TopMenuMobile
