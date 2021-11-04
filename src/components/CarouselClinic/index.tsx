import React from 'react'

import img1 from '../../assets/clinic/img1.png'
import img2 from '../../assets/clinic/img2.png'
import img3 from '../../assets/clinic/img3.png'
import img4 from '../../assets/clinic/img4.png'
import img5 from '../../assets/clinic/img5.png'
import img6 from '../../assets/clinic/img6.png'
import img7 from '../../assets/clinic/img7.png'
import img8 from '../../assets/clinic/img8.png'
import img9 from '../../assets/clinic/img9.png'

import Slide from './Slide'

import { CarouselStyled } from './styles'

const CarouselClinic: React.FC = () => {
  const slides = [
    {
      id: 1,
      url: img1,
      alt: 'img1'
    },
    {
      id: 2,
      url: img2,
      alt: 'img2'
    },
    {
      id: 3,
      url: img3,
      alt: 'img3'
    },
    {
      id: 4,
      url: img4,
      alt: 'img4'
    },
    {
      id: 5,
      url: img5,
      alt: 'img5'
    },
    {
      id: 6,
      url: img6,
      alt: 'img6'
    },
    {
      id: 7,
      url: img7,
      alt: 'img7'
    },
    {
      id: 8,
      url: img8,
      alt: 'img8'
    },
    {
      id: 9,
      url: img9,
      alt: 'img9'
    }
  ]

  return (
    <CarouselStyled
      // navButtonsAlwaysInvisible={true}
      timeout={1000}
      interval={500000000}
      indicatorContainerProps={{
        style: {
          // display: 'none'
        }
      }}
    >
      {slides.map((data, i) => (
        <Slide key={i} {...data} />
      ))}
    </CarouselStyled>
  )
}

export default CarouselClinic
