import styled from 'styled-components'
import Modal from '@mui/material/Modal'
import { IoCloseOutline } from 'react-icons/io5'
import Divider from '@mui/material/Divider'

export const Container = styled.div`
  background-color: ${props => props.theme.palette.primary.dark};
  width: 80vw;
  max-height: 80vh;
  margin: auto;
  border-radius: 8px;
  padding: 5vw;
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`

export const ModalStyled = styled(Modal)`
  display: flex;
`

export const ScrollableContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vw 5vw 0vw 5vw;
  overflow: auto;
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
  font-family: 'Celine Peach Sans', 'Roboto', sans-serif;
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

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;

  > a {
    margin: 0vw 2vw;
  }
`

export const DividerStyled = styled(Divider)`
  /* display: block; */
  /* height: 1px; */
  /* border: 0; */
  /* border-top: 1px solid ${props =>
    props.theme.palette.primary.contrastText}; */
  /* margin: 3em 0; */
  /* padding: 0; */
  /* margin: 5vw; */
`
