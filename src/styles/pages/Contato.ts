import styled from 'styled-components'
import IResponsive from '../../interfaces/IResponsive'

export const Container = styled.div`
  min-height: 100vh;
`

export const AddressContainer = styled.div<IResponsive>`
  display: grid;
  grid-template-columns: 0.01fr 1fr;
  grid-column-gap: 28px;
  grid-row-gap: 30px;
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: 1rem;
  font-size: ${props => (props.isBreakpoint ? '1rem' : '1.5rem')};
  font-family: 'Roboto', sans-serif;
  padding: ${props =>
    props.isBreakpoint ? '0 15vw 5vw 15vw' : '2vw 20vw 5vw 20vw'};

  > svg {
    font-size: 1.5rem;
  }
`

export const Text = styled.div`
  word-break: break-word;
`
