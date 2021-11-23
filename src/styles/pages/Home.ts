import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.palette.primary.contrastText};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const CarouselDesktopContainer = styled.div`
  width: 100%;
`

export const Body = styled.div`
  /* display: flex; */
  width: 100%;
  padding: 0px 5px 15vw 5px;
  min-height: 600px;
  /* height: inherit; */
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: hidden;
`
