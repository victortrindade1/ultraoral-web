import styled from 'styled-components'

interface IContainer {
  readonly isBreakingpoint: boolean
}

export const Container = styled.div<IContainer>`
  margin-bottom: ${props => (props.isBreakingpoint ? '50px' : '0px')};
`
