import React from 'react'

import case1 from '../../assets/cases/case1.jpg'
import case2 from '../../assets/cases/case2.jpg'
import case3 from '../../assets/cases/case3.jpg'
import case4 from '../../assets/cases/case4.jpg'
import case5 from '../../assets/cases/case5.jpg'
import case6 from '../../assets/cases/case6.jpg'
import case7 from '../../assets/cases/case7.jpg'
import case8 from '../../assets/cases/case8.jpg'
import case9 from '../../assets/cases/case9.jpg'
import case10 from '../../assets/cases/case10.jpg'
import case11 from '../../assets/cases/case11.jpg'
import case12 from '../../assets/cases/case12.jpg'
import case13 from '../../assets/cases/case13.jpg'
import case14 from '../../assets/cases/case14.jpg'

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
    },
    {
      id: 7,
      url: case7,
      alt: 'case7'
    },
    {
      id: 8,
      url: case8,
      alt: 'case8'
    },
    {
      id: 9,
      url: case9,
      alt: 'case9'
    },
    {
      id: 10,
      url: case10,
      alt: 'case10'
    },
    {
      id: 11,
      url: case11,
      alt: 'case11'
    },
    {
      id: 12,
      url: case12,
      alt: 'case12'
    },
    {
      id: 13,
      url: case13,
      alt: 'case13'
    },
    {
      id: 14,
      url: case14,
      alt: 'case14'
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
