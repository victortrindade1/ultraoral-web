import styled from 'styled-components'

// import img1 from '../../assets/slides/img1.jpeg'

interface IBox {
  isBoxClicked: boolean
}

interface IClinicBox {
  image: any
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.text};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const CarouselDesktopContainer = styled.div`
  /* height: 600px; */
  width: 100%;
`

export const Body = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px 10px 10px;
  height: inherit;
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: inherit;
`

// export const ClinicBox = styled.div`
export const ClinicBox = styled.div<IClinicBox>`
  flex-grow: 0.4;
  margin-bottom: 10px;

  background: ${props => props.theme.colors.dark} url('${props => props.image}')
    no-repeat center;
  background-size: cover;
  &:hover {
    /* opacity: 0.5; */
  }

  transition: all 0.5s;
`
export const OverlayClinicBox = styled.div<IBox>`
  width: 100%;
  height: 100%;
  /* position: relative; */

  background-color: green;

  /* visibility: hidden; */
  opacity: ${props => (props.isBoxClicked ? 1 : 0)};
`

export const MapsBox = styled.div`
  flex-grow: 0.3;
  margin-bottom: 10px;
  background-color: brown;
`

export const DentistsBox = styled.div`
  flex-grow: 0.4;
  margin-bottom: 10px;
  background-color: yellow;
`

export const WhatsAppBox = styled.div`
  flex-grow: 0.3;
  margin-bottom: 10px;
  background-color: blanchedalmond;
`

export const SpecialitiesBox = styled.div`
  flex-grow: 0.4;
  margin-bottom: 10px;
  background-color: teal;
`

export const ContactBox = styled.div`
  flex-grow: 0.3;
  margin-bottom: 10px;
  background-color: firebrick;
`

export const Text = styled.div``
