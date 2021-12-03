import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#be7e69',
      dark: '#333333',
      contrastText: '#f4f4f4'
    },
    secondary: {
      light: '#999',
      main: '#f44336',
      dark: '#222222',
      // dark: '#000000',
      contrastText: '#000'
    },
    warning: {
      main: '#be7e69'
    },
    info: {
      main: '#f4f4f4'
    }
  }
})

export default theme
