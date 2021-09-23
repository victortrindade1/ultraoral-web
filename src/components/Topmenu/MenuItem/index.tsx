import React from 'react'

import { Container, IconContainer, Icon, Title } from './styles'

const MenuItem: React.FC = ({ icon, title }) => {
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
