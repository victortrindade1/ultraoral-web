import styled from 'styled-components'

interface IContainer {
  readonly isBreakingpoint: boolean
}

export const Container = styled.header<IContainer>`
  margin-bottom: ${props => (props.isBreakingpoint ? '70px' : '0px')};

  background: ${props => props.theme.palette.primary.dark};
  width: 100%;
  display: flex;
  align-items: center;
`
