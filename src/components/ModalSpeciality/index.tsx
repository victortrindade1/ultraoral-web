import React from 'react'
import Fade from '@mui/material/Fade'

import {
  ModalStyled,
  Container,
  CloseButton,
  Title,
  Text
  // TextContainer
} from './styles'

interface IProps {
  data: {
    title: string
    description: string
    background?: SVGElement
  }
  open: boolean
  onClose: () => void
}

const ModalSpeciality: React.FC<IProps> = ({ data, open, onClose }) => {
  return (
    <ModalStyled open={open} onClose={onClose}>
      <Fade in={open} timeout={500}>
        <Container background={data.background}>
          <CloseButton onClick={onClose} />
          {/* <TextContainer> */}
          <Title>{data.title}</Title>
          <Text>{data.description}</Text>
          {/* </TextContainer> */}
        </Container>
      </Fade>
    </ModalStyled>
  )
}

export default ModalSpeciality
