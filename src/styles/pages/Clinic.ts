import styled from 'styled-components'
import { darken } from 'polished'
interface IResponsive {
  readonly isBreakpoint: boolean
}
export const Container = styled.div`
  width: 100%;
  /* background-color: fuchsia; */
  /* padding-top: 10vw; */
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const BodyClinic = styled.div<IResponsive>`
  padding: ${props => (props.isBreakpoint ? '0 15vw 0 15vw' : '0 20vw 0 20vw')};

  > p {
    color: ${props => darken(0.3, props.theme.palette.primary.contrastText)};

    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    line-height: 2rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  padding-top: 15vw;
  padding-bottom: 10px;

  color: ${props => props.theme.palette.primary.main};
`

export const Address = styled.div`
  color: ${props => props.theme.palette.primary.contrastText};
  font-family: 'Roboto', sans-serif;
  padding-top: 11px;
  font-size: 1rem;
`

export const Text = styled.div`
  padding-left: 11px;
  word-break: break-word;
`

export const GridContact = styled.div<IResponsive>`
  display: grid;
  grid-template-columns: 0.01fr 1fr;
  grid-row-gap: 11px;
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: ${props => (props.isBreakpoint ? '4vw' : '2vw')};
  font-family: 'Roboto', sans-serif;
  padding-bottom: 15vw;
`
