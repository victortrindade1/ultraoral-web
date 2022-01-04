import { createGlobalStyle } from 'styled-components'
import { Theme } from './styled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    /* padding-top: 20px; */
  }

  body {
    background: ${props => props.theme.palette.secondary.dark};

    color: ${props => props.theme.palette.primary.contrastText};
    font: 400 16px Work Sans, sans-serif;
    -webkit-font-smoothing: antialiased !important;

    /* Google Maps */
    /* .is-map > #__next > .navbar {
      display: none;
    }
    .is-map > #__next > .container {
      width: 100%;
      max-width: 100%;
      padding: 0 !important;
    } */
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`
