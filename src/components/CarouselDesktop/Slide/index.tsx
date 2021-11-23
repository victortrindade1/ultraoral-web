import React from 'react'
import Link from '../../NoScrollLink'

import {
  Container,
  DescriptionContainer,
  Description,
  ButtonContainer,
  ButtonStyled
} from './styles'

interface ISlide {
  description?: string
  url: string
}

const Slide: React.FC<ISlide> = ({ url, description }: ISlide) => {
  return (
    <>
      <Container image={url}>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
        <Link href="/agendaragora" passHref>
          <ButtonContainer>
            <ButtonStyled variant="outlined" color={'warning'}>
              AGENDAR AGORA
            </ButtonStyled>
          </ButtonContainer>
        </Link>
      </Container>
    </>
  )
}

export default Slide
