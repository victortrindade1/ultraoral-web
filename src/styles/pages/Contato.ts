import styled from 'styled-components'
import Divider from '@mui/material/Divider'

interface IResponsive {
  readonly isBreakpoint: boolean
}

export const Container = styled.div`
  /* background-color: ${props => props.theme.palette.primary.dark};
  width: 80vw;
  max-height: 80vh;
  margin: auto;
  border-radius: 8px;
  padding: 5vw;
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative; */
`

export const AddressContainer = styled.div<IResponsive>`
  display: grid;
  grid-template-columns: 0.01fr 1fr;
  grid-column-gap: ${props => (props.isBreakpoint ? '10px' : '28px')};
  grid-row-gap: ${props => (props.isBreakpoint ? '30px' : '30px')};
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};
  font-size: ${props => (props.isBreakpoint ? '1rem' : '1.5rem')};
  font-family: 'Roboto', sans-serif;
  padding: ${props =>
    props.isBreakpoint ? '5vw 5vw 15vw 5vw' : '2vw 20vw 15vw 20vw'};

  > svg {
    font-size: 1.5rem;
  }
`

export const Text = styled.div`
  word-break: break-word;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1em;

  > a {
    margin: 0vw 2vw;
  }
`

export const DividerStyled = styled(Divider)`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${props => props.theme.palette.primary.contrastText};
  margin: 3em 0;
  padding: 0;
`
