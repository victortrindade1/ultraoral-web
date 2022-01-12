// import Zoom from '@mui/material/Zoom'
import React from 'react'

import CarouselCases from '../CarouselCases'

import t_case1 from '../../assets/cases/thumbnails/case1.jpeg'
import t_case2 from '../../assets/cases/thumbnails/case2.jpeg'
import t_case3 from '../../assets/cases/thumbnails/case3.jpeg'
import t_case4 from '../../assets/cases/thumbnails/case4.jpeg'
import t_case5 from '../../assets/cases/thumbnails/case5.jpeg'
import t_case6 from '../../assets/cases/thumbnails/case6.jpeg'

import { Container, PhotoThumb, CarouselContainer, ModalStyled } from './styles'
import { useState } from 'react'

const photos = [
  {
    id: 1,
    alt: 'case1',
    thumb: t_case1
  },
  {
    id: 2,
    alt: 'case2',
    thumb: t_case2
  },
  {
    id: 3,
    alt: 'case3',
    thumb: t_case3
  },
  {
    id: 4,
    alt: 'case4',
    thumb: t_case4
  },
  {
    id: 5,
    alt: 'case5',
    thumb: t_case5
  },
  {
    id: 6,
    alt: 'case6',
    thumb: t_case6
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
          <CarouselCases index={id} />
        </CarouselContainer>
      </ModalStyled>
    </Container>
  )
}

export default Album
