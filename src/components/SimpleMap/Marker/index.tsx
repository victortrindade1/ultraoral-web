import React from 'react'

import marker from '../../../assets/icons/marker.svg'

import { Container, Icon } from './styles'

const Marker = (props: any) => {
  const { name } = props
  return (
    <Container title={name}>
      <Icon src={marker} alt={name} />
    </Container>
  )
}

export default Marker
