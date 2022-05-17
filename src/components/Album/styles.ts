import styled from 'styled-components'
import Modal from '@mui/material/Modal'

interface IContainerImage {
  image: any
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20vw 20vw 20vw 20vw 20vw 20vw 20vw;
  grid-gap: 2vw;
  margin: 0vw 15vw 15vw 15vw;
  padding-bottom: 15vw;
`

export const PhotoThumb = styled.div<IContainerImage>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.image}') no-repeat center;
  background-size: cover;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`

export const CarouselContainer = styled.div`
  height: auto;
  width: 70%;

  margin: auto;
`

export const Photo = styled.img``

export const ModalStyled = styled(Modal)`
  display: flex;
`
