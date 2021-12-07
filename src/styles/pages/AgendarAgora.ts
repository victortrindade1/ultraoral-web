import styled from 'styled-components'
import IResponsive from '../../interfaces/IResponsive'

export const Container = styled.div`
  min-height: 100vh;
`

export const ButtonContainer = styled.div<IResponsive>`
  width: ${props => (props.isBreakpoint ? '80%' : '40%')};
  margin: auto;
  padding-top: ${props => (props.isBreakpoint ? '15vw' : '0')};
`

export const ContactContainer = styled.div<IResponsive>`
  display: grid;
  grid-template-columns: 0.01fr 1fr;
  grid-row-gap: 18px;
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: ${props => (props.isBreakpoint ? '1.5rem' : '2rem')};
  font-family: 'Roboto', sans-serif;
  width: ${props => (props.isBreakpoint ? '80%' : '40%')};
  margin: auto;
  padding-top: ${props => (props.isBreakpoint ? '15vw' : '5vw')};
  padding-bottom: 5vw;
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
