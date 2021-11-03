import React from 'react'

import img1 from '../../assets/clinic/img1.png'
import t_img1 from '../../assets/clinic/thumbs/img1.jpeg'
import img2 from '../../assets/clinic/img2.png'
import t_img2 from '../../assets/clinic/thumbs/img2.jpeg'
import img3 from '../../assets/clinic/img3.png'
import t_img3 from '../../assets/clinic/thumbs/img3.jpeg'
import img4 from '../../assets/clinic/img4.png'
import t_img4 from '../../assets/clinic/thumbs/img4.jpeg'
import img5 from '../../assets/clinic/img5.png'
import t_img5 from '../../assets/clinic/thumbs/img5.jpeg'
import img6 from '../../assets/clinic/img6.png'
import t_img6 from '../../assets/clinic/thumbs/img6.jpeg'
import img7 from '../../assets/clinic/img7.png'
import t_img7 from '../../assets/clinic/thumbs/img7.jpeg'
import img8 from '../../assets/clinic/img8.png'
import t_img8 from '../../assets/clinic/thumbs/img8.jpeg'
import img9 from '../../assets/clinic/img9.png'
import t_img9 from '../../assets/clinic/thumbs/img9.jpeg'

import { Container, Photo } from './styles'

const photos = [
  {
    url: img1,
    alt: 'img1',
    thumb: t_img1
  },
  {
    url: img2,
    alt: 'img2',
    thumb: t_img2
  },
  {
    url: img3,
    alt: 'img3',
    thumb: t_img3
  },
  {
    url: img4,
    alt: 'img4',
    thumb: t_img4
  },
  {
    url: img5,
    alt: 'img5',
    thumb: t_img5
  },
  {
    url: img6,
    alt: 'img6',
    thumb: t_img6
  },
  {
    url: img7,
    alt: 'img7',
    thumb: t_img7
  },
  {
    url: img8,
    alt: 'img8',
    thumb: t_img8
  },
  {
    url: img9,
    alt: 'img9',
    thumb: t_img9
  }
]

const Album: React.FC = () => {
  return (
    <Container>
      {photos.map((data, i) => (
        <Photo key={i} image={data.thumb} title={data.alt} />
      ))}
    </Container>
  )
}

export default Album
