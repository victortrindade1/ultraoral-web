import React from 'react'

import case1 from '../../assets/cases/case1.jpg'
import case2 from '../../assets/cases/case2.jpg'
import case3 from '../../assets/cases/case3.jpg'
import case4 from '../../assets/cases/case4.jpg'
import case5 from '../../assets/cases/case5.jpg'
import case6 from '../../assets/cases/case6.jpg'
// import img7 from '../../assets/cases/case7.jpg'
// import img8 from '../../assets/cases/case8.jpg'
// import img9 from '../../assets/cases/case9.jpg'

import Slide from './Slide'

import { CarouselStyled } from './styles'

interface ICarouselCases {
  index: number
}
const CarouselCases: React.FC<ICarouselCases> = ({ index }) => {
  const slides = [
    {
      id: 1,
      url: case1,
      alt: 'case1'
    },
    {
      id: 2,
      url: case2,
      alt: 'case2'
    },
    {
      id: 3,
      url: case3,
      alt: 'case3'
    },
    {
      id: 4,
      url: case4,
      alt: 'case4'
    },
    {
      id: 5,
      url: case5,
      alt: 'case5'
    },
    {
      id: 6,
      url: case6,
      alt: 'case6'
    }
  ]

  return (
    <CarouselStyled initialSlide={index} lazyLoad>
      {slides.map((data, i) => (
        <Slide key={i} {...data} />
      ))}
    </CarouselStyled>
  )
}

export default CarouselCases
