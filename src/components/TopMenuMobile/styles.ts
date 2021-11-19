import styled from 'styled-components'
import Drawer from '@mui/material/Drawer'

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0px;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.palette.primary.main};
  background-color: ${props => props.theme.palette.secondary.dark};
  z-index: 999;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const MenuButtonContainer = styled.div``

export const LogoContainer = styled.div`
  display: flex;
  margin: auto;
`

export const Image = styled.img`
  height: 40px;
  width: auto;
`

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #456eee;
`

export const DrawerStyled = styled(Drawer)`
  top: 50;
`
