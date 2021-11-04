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
