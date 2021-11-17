import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#d4af37',
      dark: '#333333',
      contrastText: '#f4f4f4'
    },
    secondary: {
      light: '#d4a',
      main: '#f44336',
      dark: '#222222',
      contrastText: '#000'
    },
    warning: {
      main: '#d4af37'
    },
    info: {
      main: '#f4f4f4'
    }
  }
})

export default theme
