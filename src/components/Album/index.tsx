// import Zoom from '@mui/material/Zoom'
import React from 'react'

import CarouselClinic from '../CarouselClinic'

import t_img1 from '../../assets/clinic/thumbs/img1.jpeg'
import t_img2 from '../../assets/clinic/thumbs/img2.jpeg'
import t_img3 from '../../assets/clinic/thumbs/img3.jpeg'
import t_img4 from '../../assets/clinic/thumbs/img4.jpeg'
import t_img5 from '../../assets/clinic/thumbs/img5.jpeg'
import t_img6 from '../../assets/clinic/thumbs/img6.jpeg'
import t_img7 from '../../assets/clinic/thumbs/img7.jpeg'
import t_img8 from '../../assets/clinic/thumbs/img8.jpeg'
import t_img9 from '../../assets/clinic/thumbs/img9.jpeg'

import { Container, PhotoThumb, CarouselContainer, ModalStyled } from './styles'
import { useState } from 'react'

const photos = [
  {
    id: 1,
    alt: 'img1',
    thumb: t_img1
  },
  {
    id: 2,
    alt: 'img2',
    thumb: t_img2
  },
  {
    id: 3,
    alt: 'img3',
    thumb: t_img3
  },
  {
    id: 4,
    alt: 'img4',
    thumb: t_img4
  },
  {
    id: 5,
    alt: 'img5',
    thumb: t_img5
  },
  {
    id: 6,
    alt: 'img6',
    thumb: t_img6
  },
  {
    id: 7,
    alt: 'img7',
    thumb: t_img7
  },
  {
    id: 8,
    alt: 'img8',
    thumb: t_img8
  },
  {
    id: 9,
    alt: 'img9',
    thumb: t_img9
  }
]

const Album: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(0)

  const handleOpen = i => {
    setOpen(true)
    setId(i)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container>
      {photos.map((data, i) => (
        <PhotoThumb
          key={i}
          image={data.thumb}
          title={data.alt}
          onClick={() => handleOpen(i)}
        />
      ))}
      <ModalStyled open={open} onClose={handleClose}>
        <CarouselContainer>
          <CarouselClinic index={id} />
        </CarouselContainer>
      </ModalStyled>
    </Container>
  )
}

export default Album
