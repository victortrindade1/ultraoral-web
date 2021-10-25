import styled from 'styled-components'
// import Button from '@mui/material/Button'
// import { Button } from '@material-ui/core'

interface IContainer {
  image: any
}

export const Container = styled.div<IContainer>`
  background: ${props => props.theme.colors.dark} url('${props => props.image}')
    no-repeat center;
  background-size: cover;
  max-height: 800px;
  height: 70vw;
`

// export const Image = styled.img``

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Description = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  color: ${props => props.theme.colors.text};

  font: 300 4vw 'Roboto', sans-serif;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px black;
`

// export const ButtonStyled = styled(Button)`
//   position: absolute;
//   top: 70%;

//   z-index: 1;
// `
