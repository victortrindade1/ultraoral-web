import styled from 'styled-components'
import IResponsive from '../../interfaces/IResponsive'

export const Container = styled.div<IResponsive>`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.palette.primary.dark};
  position: relative;
  /* bottom: 0px; */
  justify-content: ${props => (props.isBreakpoint ? 'flex-start' : 'center')};
  align-items: center;
  border-top: 1px solid ${props => props.theme.palette.primary.main};
  min-height: 60px;
  height: 80px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex: 0.4;
  align-items: center;
  justify-content: space-around;

  > a svg {
    height: 40px;
    width: auto;
    fill: ${props => props.theme.palette.secondary.light};
    /* margin-left: 15px; */
  }

  > div svg {
    height: 30px;
    width: auto;
    fill: ${props => props.theme.palette.secondary.light};
    cursor: pointer;
  }
`

export const DevContainer = styled.div<IResponsive>`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 15px;
`

export const Text = styled.div`
  color: ${props => props.theme.palette.secondary.light};
  font-size: 0.5rem;
  /* margin: 10px 0; */
`

export const Devlogo = styled.img`
  height: 40px;
  width: auto;
`
