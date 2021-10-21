import React from 'react'
import { useMediaQuery } from '@mui/material'

import TopMenuMobile from '../TopMenuMobile'
import TopMenuDesktop from '../TopMenuDesktop'

import { Container } from './styles'

const TopMenu: React.FC = () => {
  const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <Container isBreakingpoint={isBreakpoint}>
      {isBreakpoint ? <TopMenuMobile /> : <TopMenuDesktop />}
    </Container>
  )
}

export default TopMenu
