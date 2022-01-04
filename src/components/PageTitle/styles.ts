import styled from 'styled-components'
import IResponsive from '../../interfaces/IResponsive'

export const Container = styled.div<IResponsive>`
  padding-top: ${props => (props.isBreakpoint ? '20px' : '0px')};
`

export const TextContainer = styled.div<IResponsive>`
  padding: ${props => (props.isBreakpoint ? '15vw' : '20vw 20vw 10vw 20vw')};
  /* font-family: 'Work Sans', sans-serif; */
`

export const Title = styled.h1<IResponsive>`
  color: ${props => props.theme.palette.primary.main};
  font-size: ${props => (props.isBreakpoint ? '2.25rem' : '3rem')};
  margin-bottom: 0.5rem;
  font-weight: 300;
  font-family: 'Celine Peach Sans', 'Work Sans', sans-serif;
`

export const Subtitle = styled.p<IResponsive>`
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: ${props => (props.isBreakpoint ? '2rem' : '2.5rem')};
  font-weight: 300;
  font-family: 'Quesha', 'Work Sans', sans-serif;
`

export const BackButton = styled.img`
  height: 10vw;
  max-height: 50px;
  margin-left: 15px;
`
