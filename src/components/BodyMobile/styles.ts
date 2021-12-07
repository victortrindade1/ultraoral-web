import styled from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { lighten } from 'polished'

interface IBox {
  // isBoxClicked: boolean
  isBoxClicked: boolean
}

interface IBackgroundBox {
  image: any
}

export const Container = styled.div`
  /* display: flex; */
  width: 100%;
  padding: 0px 5px 0 5px;
  min-height: 600px;
  /* height: inherit; */
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* overflow: scroll; */
  margin-bottom: 13px;
  margin-top: 15px;
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: inherit;
`

export const ClinicBox = styled.div<IBackgroundBox>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.image}') no-repeat center;
  background-size: cover;

  flex-grow: 0.4;
  margin-bottom: 10px;
`

export const SpecialitiesBox = styled.div<IBackgroundBox>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.image}') no-repeat center;
  background-size: cover;

  flex-grow: 0.4;
  margin-bottom: 10px;
`

export const DentistsBox = styled.div<IBackgroundBox>`
  background: ${props => props.theme.palette.primary.dark}
    url('${props => props.image}') no-repeat center;
  background-size: cover;

  flex-grow: 0.4;
  margin-bottom: 10px;
`

export const OverlayClinicBox = styled.div<IBox>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  backdrop-filter: blur(6px);

  opacity: ${props => (props.isBoxClicked ? 1 : 0)};
  background-color: ${props => props.isBoxClicked && 'rgba(0, 0, 0, 0.5)'};

  transition: all 0.5s;
  position: relative;
`
export const OverlaySpecialitiesBox = styled.div<IBox>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  backdrop-filter: blur(6px);

  opacity: ${props => (props.isBoxClicked ? 1 : 0)};
  background-color: ${props => props.isBoxClicked && 'rgba(0, 0, 0, 0.5)'};

  transition: all 0.5s;

  position: relative;
`

export const OverlayDentistsBox = styled.div<IBox>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  backdrop-filter: blur(6px);

  opacity: ${props => (props.isBoxClicked ? 1 : 0)};
  background-color: ${props => props.isBoxClicked && 'rgba(0, 0, 0, 0.5)'};

  transition: all 0.5s;
  position: relative;
`

export const MapsBox = styled.div`
  /* flex-grow: 0.3; */
  margin-bottom: 10px;

  display: flex;
  flex: 0.4;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.dark};
`

export const WhatsAppBox = styled.div`
  /* flex-grow: 0.3; */
  margin-bottom: 10px;

  display: flex;
  flex: 0.3;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.dark};
`

export const ContactBox = styled.div`
  display: flex;
  flex: 0.3;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  /* background-color: ${props =>
    lighten(0.01, props.theme.palette.primary.dark)}; */
  background-color: #000;
`

export const Text = styled.div`
  font: 500 9vw 'Quesha', 'Roboto', sans-serif;

  color: ${props => props.theme.palette.primary.contrastText};
  text-transform: uppercase;
  padding-left: 5vw;
  text-shadow: 1px 1px 2px black;

  > div:nth-of-type(1) {
    font-size: 5vw;
    padding-bottom: 5px;
  }

  > span {
    font-size: 7vw;
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;

  width: 100%;
  display: flex;
  justify-content: center;
`

export const ButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,

  '&:active': {
    borderColor: theme.palette.primary.main
  },
  '&:focus': {
    borderColor: theme.palette.primary.main
  }
}))

export const Icon = styled.img`
  width: 20vw;
  height: fit-content;
`

export const Logo = styled.img`
  /* width: 20vw; */
  max-width: 90%;
  min-width: 80%;
  height: fit-content;
`

export const IconButtonStyled = styled(Button)`
  width: 100%;
  height: 100%;
`

export const BackgroundRounded = styled.div`
  background-color: #fff;
  border-radius: 4vw;

  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 15vw;
  }
`
