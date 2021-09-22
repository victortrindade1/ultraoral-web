import React, { useState } from 'react'

import LogoBranca from '../../assets/logo_branca_horizontal_200x45.svg'

import { SimpleDropDown } from '../SimpleDropDown'

import {
  Container,
  BtnMenuContainer,
  BtnMenu,
  Logo,
  MenuCollapsedContainer
} from './styles'

const Topmenu: React.FC = () => {
  const [visible, setVisible] = useState(false)

  function handleToggleVisible() {
    setVisible(!visible)
  }

  return (
    <>
      {/* Navbar */}
      <Container>
        <BtnMenuContainer onClick={handleToggleVisible}>
          <BtnMenu />
        </BtnMenuContainer>

        <Logo src={LogoBranca} alt="logo" />
      </Container>

      {/* Menu expandido */}
      <SimpleDropDown open={visible}>
        <MenuCollapsedContainer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          sit numquam possimus veritatis ut asperiores dolorum, perspiciatis id
          tempora enim debitis et, quae pariatur, praesentium explicabo
          blanditiis laborum culpa expedita!
        </MenuCollapsedContainer>
      </SimpleDropDown>
    </>
  )
}

export default Topmenu
