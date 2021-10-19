import React from 'react'

import img1 from '../../assets/slides/img1.jpeg'
import img2 from '../../assets/slides/img2.png'

import Slide from './Slide'

import { CarouselStyled } from './styles'

const CarouselDesktop: React.FC = () => {
  const slides = [
    {
      description: 'Descubra a experiência no melhor atendimento',
      buttonDescription: null,
      url: img1,
      alt: 'img1'
    },
    {
      description: 'Agende agora mesmo uma consulta',
      buttonDescription: 'AGENDAR',
      url: img2,
      alt: 'img2'
    }
  ]

  return (
    <CarouselStyled
      interval={5000}
      indicatorContainerProps={{
        style: {
          display: 'none'
        }
      }}
    >
      {slides.map((data, i) => (
        <Slide key={i} {...data} />
      ))}
    </CarouselStyled>
  )
}

export default CarouselDesktop
