import styled from 'styled-components'
import Modal from '@mui/material/Modal'
import { IoCloseOutline } from 'react-icons/io5'

interface IContainer {
  background: any
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
  font-family: 'Roboto', sans-serif;
  position: relative;
`

export const CloseButton = styled(IoCloseOutline).attrs({
  size: '2rem'
})`
  color: ${props => props.theme.palette.primary.main};
  position: absolute;
  top: 5px;
  right: 5px;

  :hover {
    cursor: pointer;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.palette.primary.main};
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 300;
`

export const Text = styled.div`
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`
