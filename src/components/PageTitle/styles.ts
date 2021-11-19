import styled from 'styled-components'

// interface ITitle {
//   readonly center: boolean
// }

interface IResponsive {
  isBreakpoint: boolean
}

export const Container = styled.div<IResponsive>`
  padding-top: ${props => (props.isBreakpoint ? '20px' : '0px')};
`

export const TextContainer = styled.div<IResponsive>`
  padding: ${props => (props.isBreakpoint ? '15vw' : '20vw 20vw 10vw 20vw')};
  font-family: 'Roboto', sans-serif;
`

export const Title = styled.h1<IResponsive>`
  color: ${props => props.theme.palette.primary.main};
  font-size: ${props => (props.isBreakpoint ? '2.25rem' : '3rem')};
  margin-bottom: 0.5rem;
  font-weight: 300;
`

export const Subtitle = styled.p<IResponsive>`
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: ${props => (props.isBreakpoint ? '1.5rem' : '1.875rem')};
  font-weight: 300;
`

export const BackButton = styled.img`
  height: 10vw;
  max-height: 50px;
`
