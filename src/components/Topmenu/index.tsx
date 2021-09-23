import React, { useState } from 'react'

import LogoBranca from '../../assets/logo_branca_horizontal_200x45.svg'
import IconClinica from '../../assets/icon_hospital.svg'
import IconWhatsapp from '../../assets/icon_whatsapp.svg'
import IconContact from '../../assets/icon_contact.svg'
import IconDentist from '../../assets/icon_dentist.svg'
import IconMaps from '../../assets/icon_maps.svg'
import IconEspecialidades from '../../assets/icon_toothshield.svg'

import { SimpleDropDown } from '../SimpleDropDown'
import MenuItem from './MenuItem'

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
          <MenuItem icon={IconClinica} title="CONHEÇA A CLÍNICA" />
          <MenuItem icon={IconWhatsapp} title="QUERO AGENDAR" />
          <MenuItem icon={IconMaps} title="COMO CHEGAR" />
          <MenuItem icon={IconEspecialidades} title="ESPECIALIDADES" />
          <MenuItem icon={IconDentist} title="CORPO CLÍNICO" />
          <MenuItem icon={IconContact} title="CONTATO" />
        </MenuCollapsedContainer>
      </SimpleDropDown>
    </>
  )
}

export default Topmenu
