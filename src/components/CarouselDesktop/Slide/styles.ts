import styled from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'

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

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 30vh;
`

export const Description = styled.div`
  display: flex;
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

export const ButtonContainer = styled.div`
  margin: auto;
  margin-top: 0;
  z-index: 99999999;
`

export const ButtonStyled = styled(Button)<ButtonProps>(() => ({
  height: '50px',
  textShadow: '1px 1px 2px black'
}))
