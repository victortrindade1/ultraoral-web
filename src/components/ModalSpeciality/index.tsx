import React from 'react'
import Fade from '@mui/material/Fade'

import { ModalStyled, Container, CloseButton, Title, Text } from './styles'

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
          <Title>{data.title}</Title>
          <Text>{data.description}</Text>
        </Container>
      </Fade>
    </ModalStyled>
  )
}

export default ModalSpeciality
