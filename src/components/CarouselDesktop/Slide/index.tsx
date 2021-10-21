import React from 'react'
// import { Paper } from '@material-ui/core'
// import Button from '@mui/material/Button';
import Image from 'next/image'

import { Container, DescriptionContainer, Description } from './styles'

interface ISlide {
  description?: string
  url: any
  alt: string
}

const Slide: React.FC<ISlide> = ({ url, alt, description }: ISlide) => {
  return (
    <Container>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <Image src={url} alt={alt} layout={'responsive'} />
    </Container>
  )
}

export default Slide
