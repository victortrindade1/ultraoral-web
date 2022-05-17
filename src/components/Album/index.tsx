// import Zoom from '@mui/material/Zoom'
import React from 'react'

import CarouselCases from '../CarouselCases'

import t_case1 from '../../assets/cases/thumbnails/case1.jpeg'
import t_case2 from '../../assets/cases/thumbnails/case2.jpeg'
import t_case3 from '../../assets/cases/thumbnails/case3.jpeg'
import t_case4 from '../../assets/cases/thumbnails/case4.jpeg'
import t_case5 from '../../assets/cases/thumbnails/case5.jpeg'
import t_case6 from '../../assets/cases/thumbnails/case6.jpeg'
import t_case7 from '../../assets/cases/thumbnails/case7.jpeg'
import t_case8 from '../../assets/cases/thumbnails/case8.jpeg'
import t_case9 from '../../assets/cases/thumbnails/case9.jpeg'
import t_case10 from '../../assets/cases/thumbnails/case10.jpeg'
import t_case11 from '../../assets/cases/thumbnails/case11.jpeg'
import t_case12 from '../../assets/cases/thumbnails/case12.jpeg'
import t_case13 from '../../assets/cases/thumbnails/case13.jpeg'
import t_case14 from '../../assets/cases/thumbnails/case14.jpeg'

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
  },
  {
    id: 7,
    alt: 'case7',
    thumb: t_case7
  },
  {
    id: 8,
    alt: 'case8',
    thumb: t_case8
  },
  {
    id: 9,
    alt: 'case9',
    thumb: t_case9
  },
  {
    id: 10,
    alt: 'case10',
    thumb: t_case10
  },
  {
    id: 11,
    alt: 'case11',
    thumb: t_case11
  },
  {
    id: 12,
    alt: 'case12',
    thumb: t_case12
  },
  {
    id: 13,
    alt: 'case13',
    thumb: t_case13
  },
  {
    id: 14,
    alt: 'case14',
    thumb: t_case14
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
