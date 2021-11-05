import React from 'react'

import { Container, ImageStyled } from './styles'

interface ISlide {
  url: any
  alt: string
}

const Slide: React.FC<ISlide> = ({ url, alt }: ISlide) => {
  return (
    <Container>
      {/* Falta criar um loader q carrega a imagem em baixa qualidade. O Next/Image tem a prop loader pra isso.
      Só não fiz ainda pq tem q mandar a url e não soube fazer localhost. */}
      <ImageStyled src={url} alt={alt} layout={'responsive'} />
    </Container>
  )
}

export default Slide
