import styled from 'styled-components'
import { lighten } from 'polished'

interface IResponsive {
  readonly isBreakpoint: boolean
}

export const Container = styled.div``

export const ListSpecialities = styled.ul<IResponsive>`
  padding: ${props => (props.isBreakpoint ? '5vw 0 15vw 0' : '0 0 10vw 0')};
`

export const ItemSpeciality = styled.li<IResponsive>`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: 1.5rem;
  align-items: center;
  grid-column-gap: 15px;
  width: ${props => (props.isBreakpoint ? '70%' : '40%')};
  margin: auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background: ${props => props.theme.palette.primary.dark};
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:active {
    background-color: ${props =>
      lighten(0.03, props.theme.palette.primary.dark)};
  }
  transition: all 0.5s;
`

export const IconContainer = styled.div`
  background: ${props => props.theme.palette.primary.main};
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 8px;
`

export const Icon = styled.img`
  width: 70%;
  margin: auto;
`

export const SpecialityName = styled.div``