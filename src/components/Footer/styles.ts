import styled from 'styled-components'
import IResponsive from '../../interfaces/IResponsive'

export const Container = styled.div<IResponsive>`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.palette.primary.dark};
  position: relative;
  justify-content: ${props => (props.isBreakpoint ? 'flex-start' : 'center')};
  align-items: center;
  border-top: 1px solid ${props => props.theme.palette.primary.main};
  min-height: 60px;
  margin-top: ${props => (props.isBreakpoint ? '5vw' : '0')};
`

export const SocialMediaContainer = styled.div`
  > a svg {
    height: 40px;
    width: auto;
    fill: ${props => props.theme.palette.secondary.light};
    margin-left: 15px;
  }
`

export const DevContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 15px;
`

export const Text = styled.div`
  color: ${props => props.theme.palette.secondary.light};
  font-size: 0.5rem;
`

export const Devlogo = styled.img`
  height: 40px;
  width: auto;
`
