import styled from 'styled-components'
import Drawer from '@mui/material/Drawer'
import { motion } from 'framer-motion'

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
  max-height: 40px;
  max-width: 40px;
  width: auto;
`

export const MenuContainer = styled.div`
  /* width: 100%;
  height: 100%; */
  background-color: ${props => props.theme.palette.secondary.dark};
  /* display: flex;
  flex-direction: column;
  flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* width: 40vw; */
  /* padding: 10px; */
  flex: 1;
  padding: 0 10vw;

  > a {
    text-decoration: none;
    color: ${props => props.theme.palette.secondary.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vw 0;
    &:hover {
      color: ${props => props.theme.palette.primary.main};
    }
    &.active {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`

export const DrawerStyled = styled(Drawer)``

export const ActiveIconContainer = styled(motion.div)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border: 1px solid ${props => props.theme.palette.primary.main};
`

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;
  border: none;
`

export const Icon = styled.img``

export const NameContainer = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  padding-top: 5px;
`
