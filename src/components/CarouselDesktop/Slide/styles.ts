import styled from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'
// import { Paper } from '@mui/material'

// import Button from '@mui/material/Button'
// import { Button } from '@material-ui/core'

interface IContainer {
  image: any
}

export const Container = styled.div<IContainer>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.image}') no-repeat center;
  background-size: cover;
  max-height: 800px;
  height: 70vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`

// export const Image = styled.img``

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 30vh;
`

export const Description = styled.div`
  display: flex;
  /* position: absolute; */
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  color: ${props => props.theme.palette.primary.contrastText};

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
export const ButtonContainer = styled.div`
  margin: auto;
  margin-top: 0;
  z-index: 99999999;
`

export const ButtonStyled = styled(Button)<ButtonProps>(() => ({
  // color: theme.palette.primary.main,
  // borderColor: theme.palette.primary.main,
  // width: '30vw',
  height: '50px',
  textShadow: '1px 1px 2px black'
  // fontSize: '1.5rem'

  // '&:active': {
  //   borderColor: theme.palette.primary.main
  // },
  // '&:focus': {
  //   borderColor: theme.palette.primary.main
  // },
  // '&:hover': {
  //   cursor: 'pointer'
  // }
}))

// export const ButtonStyled = styled.button``
