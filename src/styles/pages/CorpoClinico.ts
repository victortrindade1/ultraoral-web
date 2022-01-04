import styled from 'styled-components'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import { darken } from 'polished'
import IResponsive from '../../interfaces/IResponsive'

interface IContainerImage {
  image: any
}

export const Container = styled.div`
  /* padding-bottom: 15vw; */
  min-height: 100vh;
  /* position: relative; */
`

export const ListDentists = styled.ul<IResponsive>`
  width: ${props => (props.isBreakpoint ? '100%' : '70%')};
  margin: auto;
  padding-bottom: 15vw;
`

export const ItemDentist = styled.li``

export const AccordionStyled = styled(Accordion)`
  background-color: ${props => props.theme.palette.primary.dark} !important;
  margin: 5vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const AccordionDetailsStyled = styled(AccordionDetails)`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Work Sans', sans-serif;
  background-color: ${props => darken(0.03, props.theme.palette.primary.dark)};
  border-radius: 0px 0px 8px 8px;
  padding: 5vw;
`

export const PhotoContainer = styled.div<IContainerImage>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.image}') no-repeat center;
  background-size: cover;
  height: 20vh;
  border-radius: 100%;
  width: 20vh;
`

export const DescriptionContainer = styled.div`
  color: ${props => props.theme.palette.primary.contrastText};
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  padding: 5vw;
`

export const Name = styled.div`
  font-size: 3rem;
  font-family: 'Celine Peach Script', 'Work Sans', sans-serif;
`

export const Cro = styled.div`
  font-size: 1rem;
  color: #999;
`

export const SkillList = styled.ul`
  padding-right: 15vw;
  padding-bottom: 5vw;
`

export const SkillContainer = styled.div`
  padding: 5px 0px 5px 0px;
  color: ${props => props.theme.palette.primary.main};
  font-style: italic;

  > svg {
    margin-left: 10px;
  }
`

export const TreatmentList = styled.ul`
  color: ${props => props.theme.palette.primary.contrastText};
`

export const TreatmentContainer = styled.div`
  padding: 5px 0px 5px 0px;
`
