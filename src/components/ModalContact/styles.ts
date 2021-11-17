import styled from 'styled-components'
import Modal from '@mui/material/Modal'
import { IoCloseOutline } from 'react-icons/io5'

export const Container = styled.div`
  background-color: ${props => props.theme.palette.primary.dark};
  width: 80vw;
  max-height: 80vh;
  margin: auto;
  border-radius: 8px;
  padding: 10vw;
  font-family: 'Roboto', sans-serif;
  position: relative;
  overflow: auto;
`

export const ModalStyled = styled(Modal)`
  display: flex;
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

export const Title = styled.h1`
  color: ${props => props.theme.palette.primary.main};
  font-size: 2.25rem;
  margin-bottom: 3rem;
  font-weight: 300;
`

export const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: 0.01fr 1fr;
  grid-row-gap: 28px;
  grid-column-gap: 18px;
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`

export const Text = styled.div`
  word-break: break-word;
`
