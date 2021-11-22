import React from 'react'

import TopMenuMobile from '../TopMenuMobile'
import TopMenuDesktop from '../TopMenuDesktop'

import IResponsive from '../../interfaces/IResponsive'

import { Container } from './styles'

const TopMenu: React.FC<IResponsive> = ({ isBreakpoint }) => {
  return (
    <Container isBreakpoint={isBreakpoint}>
      {isBreakpoint ? <TopMenuMobile /> : <TopMenuDesktop />}
    </Container>
  )
}

export default TopMenu
