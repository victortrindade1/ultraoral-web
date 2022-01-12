import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageStyled = styled(Image).attrs({
  width: '800px',
  height: '700px'
})`
  max-height: 80vh;
`

export const Photo = styled.img`
  width: auto;
  height: auto;
  /* max-width: 100%; */
  max-height: 85vh;
  max-width: 100%;
`
