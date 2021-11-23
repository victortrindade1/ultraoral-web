import React from 'react'

// import Link from '../NoScrollLink'

import img1 from '../../assets/slides/img1.jpeg'
import img2 from '../../assets/slides/img2.png'

import Slide from './Slide'

import { CarouselStyled } from './styles'

const CarouselDesktop: React.FC = () => {
  const slides = [
    {
      description: 'Descubra a experiência no melhor atendimento',
      url: img1,
      alt: 'img1'
    },
    {
      description: 'Agende agora mesmo uma consulta',
      url: img2,
      alt: 'img2'
    }
  ]

  return (
    <CarouselStyled
      dots={false}
      fade={true}
      infinite={true}
      speed={800}
      accessibility={false}
      arrows={false}
      autoplaySpeed={5000}
      autoplay={true}
      draggable={false}
      pauseOnHover={false}
      swipe={false}
      touchMove={false}
      // slidesToShow={1}
      // slidesToScroll={1}
      // navButtonsAlwaysInvisible={true}
      // timeout={1000}
      // interval={500000000}
      // indicatorContainerProps={{
      //   style: {
      //     display: 'none'
      //   }
      // }}
      // autoPlay={true}
      // autoFocus={false}
      // emulateTouch={false}
      // infiniteLoop={true}
      // interval={5000}
      // showArrows={false}
      // showStatus={false}
      // showIndicators={false}
      // stopOnHover={false}
      // swipeable={false}
    >
      {slides.map((data, i) => (
        <Slide key={i} {...data} />
      ))}
    </CarouselStyled>
  )
}

export default CarouselDesktop
