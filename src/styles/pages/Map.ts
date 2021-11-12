import styled from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'

interface IResponsive {
  readonly isBreakpoint: boolean
}

export const Container = styled.div``

export const MapContainer = styled.div`
  height: 80vh;
  padding: 2vw;
  border-radius: 8px;
`

export const ButtonContainer = styled.div`
  position: relative;
  bottom: 15vh;

  width: 100%;
  display: flex;
  justify-content: center;
`

export const MapButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.dark,
  borderColor: theme.palette.primary.main,

  '&:active': {
    borderColor: theme.palette.primary.main
  },
  '&:focus': {
    borderColor: theme.palette.primary.main
  }
}))

export const MapButtonLabel = styled.div`
  padding-left: 5px;
`

export const AddressContainer = styled.div<IResponsive>`
  display: grid;
  grid-template-columns: 0.01fr 1fr;
  grid-row-gap: 18px;
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: ${props => (props.isBreakpoint ? '1rem' : '1rem')};
  font-family: 'Roboto', sans-serif;
  /* padding-bottom: 15vw; */
  /* padding: 5vw 15vw 15vw 15vw; */
  padding: ${props =>
    props.isBreakpoint ? '5vw 5vw 15vw 5vw' : '2vw 20vw 15vw 20vw'};
`

export const Text = styled.div`
  padding-left: 11px;
  word-break: break-word;

  &:hover,
  &:active {
    color: ${props => props.theme.palette.primary.main};
  }

  transition: color 0.5s;
`
