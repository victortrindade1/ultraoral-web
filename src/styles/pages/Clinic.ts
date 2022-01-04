import styled from 'styled-components'
import { darken } from 'polished'
import IResponsive from '../../interfaces/IResponsive'

interface IReverseContainer extends IResponsive {
  isReverse?: boolean
}

export const Container = styled.div`
  width: 100%;
  /* background-color: fuchsia; */
  /* padding-top: 10vw; */
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  /* position: relative; */
`

export const BodyClinic = styled.div<IResponsive>`
  padding: ${props => (props.isBreakpoint ? '0 15vw 0 15vw' : '0 20vw 0 20vw')};

  p {
    color: ${props => darken(0.3, props.theme.palette.primary.contrastText)};

    font-size: 1rem;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;

    line-height: 2rem;

    > span {
      color: ${props => props.theme.palette.primary.main};
      font-weight: bold;
    }
  }
`

export const Subtitle = styled.h2`
  font-size: 3rem;
  font-family: 'Quesha', 'Work Sans', sans-serif;
  padding-top: 15vw;
  padding-bottom: 30px;
  font-weight: lighter;
  color: ${props => props.theme.palette.primary.main};
`

export const PhotoTextContainer = styled.div<IReverseContainer>`
  display: flex;
  flex-direction: ${props => (props.isBreakpoint ? 'column' : 'row')};
  flex-direction: ${props =>
    props.isBreakpoint && props.isReverse && 'column-reverse'};
  align-items: center;
`

export const TextContainer = styled.div``

export const PhotoContainer = styled.div<IResponsive>`
  margin-right: ${props => !props.isBreakpoint && '45px'};
  margin-bottom: ${props => props.isBreakpoint && '30px'};
`

export const FlippedTextContainer = styled.div<IResponsive>`
  margin-right: ${props => !props.isBreakpoint && '45px'};
`

export const FlippedPhotoContainer = styled.div<IResponsive>`
  margin-bottom: ${props => props.isBreakpoint && '30px'};
`

export const Photo = styled.img<IResponsive>`
  width: ${props => (props.isBreakpoint ? '70vw' : '32vw')};
`

export const Address = styled.div`
  color: ${props => props.theme.palette.primary.contrastText};
  font-family: 'Work Sans', sans-serif;
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
  font-family: 'Work Sans', sans-serif;
  padding-bottom: 15vw;
`

export const MapContainer = styled.div`
  height: 50vh;
`
