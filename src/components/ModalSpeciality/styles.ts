import styled from 'styled-components'
import Modal from '@mui/material/Modal'
import { IoCloseOutline } from 'react-icons/io5'
import IResponsive from '../../interfaces/IResponsive'

interface IContainer {
  background?: any
}

export const ModalStyled = styled(Modal)`
  display: flex;
`

export const Container = styled.div<IContainer>`
  background: ${props => props.theme.palette.secondary.dark}
    url('${props => props.background}') no-repeat center;
  background-size: contain;
  width: 80vw;
  max-height: 80vh;
  margin: auto;
  border-radius: 8px;
  padding: 10vw;
  font-family: 'Work Sans', sans-serif;
  position: relative;
  overflow: auto;
  line-height: 2;
`

export const CloseButton = styled(IoCloseOutline).attrs({
  size: '2rem'
})`
  color: ${props => props.theme.palette.primary.main};
  position: absolute;
  top: 15px;
  right: 15px;

  :hover {
    cursor: pointer;
  }
`

export const Title = styled.h1<IResponsive>`
  color: ${props => props.theme.palette.primary.main};
  font-size: ${props => (props.isBreakpoint ? '1.5rem' : '2rem')};
  margin: 3rem 0;
  font-weight: 300;
  font-family: 'Celine Peach Sans', sans-serif;
`

export const Text = styled.div`
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

export const TextContainer = styled.div``
