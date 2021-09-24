import React from 'react'
import StaticImport from 'styled-components'
import { Container, IconContainer, Icon, Title } from './styles'

export type Svg = typeof StaticImport
interface IMenuItem {
  icon: string | undefined
  title: string
}

const MenuItem: React.FC<IMenuItem> = ({ icon, title }) => {
  return (
    <Container>
      <IconContainer>
        <Icon src={icon} alt={'clinica'} />
      </IconContainer>
      <Title>{title}</Title>
    </Container>
  )
}

export default MenuItem
