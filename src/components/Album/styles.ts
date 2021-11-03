import styled from 'styled-components'

interface IContainer {
  image: any
}

export const Container = styled.div``

export const Photo = styled.div<IContainer>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.image}') no-repeat center;
  background-size: cover;
  /* max-height: 800px; */
  /* height: 70vw; */
  height: 80px;
`
