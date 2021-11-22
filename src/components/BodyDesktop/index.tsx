import React from 'react'
import CarouselDesktop from '../CarouselDesktop'
import { Container } from './styles'

const BodyDesktop: React.FC = () => {
  // console.log(props.isBreakpoint)
  return (
    <Container>
      <CarouselDesktop />
    </Container>
  )
}

export default BodyDesktop
