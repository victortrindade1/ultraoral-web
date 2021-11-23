import React from 'react'
// import Link from '../../NoScrollLink'
import Link from 'next/dist/client/link'

// import { Paper } from '@material-ui/core'
// import Button from '@mui/material/Button';
// import Image from 'next/image'

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
  // alt: string
}

const Slide: React.FC<ISlide> = ({ url, description }: ISlide) => {
  return (
    <>
      <Container image={url}>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
        <Link href="/agendaragora">
          <ButtonContainer>
            {/* <ButtonStyled variant="outlined" color={'warning'}> */}
            <ButtonStyled variant="outlined" color={'warning'}>
              AGENDAR AGORA
            </ButtonStyled>
          </ButtonContainer>
        </Link>
        {/* <Image src={url} alt={alt} layout={'responsive'} /> */}
        {/* <Image src={url} alt={alt} /> */}
      </Container>
    </>
  )
}

export default Slide
