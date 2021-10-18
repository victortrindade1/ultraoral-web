import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Image from 'next/image'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

export const MenuContainer = styled(SwipeableDrawer)``

export const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.colors.gold,
  borderRadius: 3,
  position: 'absolute',
  top: 25
}))

export const VisibleMenu = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 100px;
  visibility: visible;
  right: 0;
  left: 0;
`

export const Logo = styled(Image).attrs({
  width: '137px'
})``

export const HiddenMenu = styled.div`
  height: 100px;
  overflow: auto;
  background: ${props => props.theme.colors.dark};
`
