import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { grey } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/core/Skeleton'
import Typography from '@material-ui/core/Typography'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

// altura que dá pra arrastar com o dedo = altura do menu visível fechado
const drawerBleeding = 56

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window
// }

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? '#444' : theme.palette.background.default
}))

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#123' : grey[800]
}))

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? '#654' : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)'
}))

export default function SwipeableEdgeDrawer() {
  // const { window } = props
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  // // This is used only for the example
  // const container =
  //   window !== undefined ? () => window().document.body : undefined

  return (
    <Root>
      {/* <CssBaseline /> */}
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            // height: `calc(50% - ${drawerBleeding}px)`,
            height: 'auto',
            overflow: 'visible',
            backgroundColor: '#c43'
          }
        }}
      />
      <Box
        sx={{ textAlign: 'center', pt: 1, position: 'absolute', top: '300px' }}
      >
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
      <SwipeableDrawer
        // container={container}
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            // top: drawerBleeding,
            // top: `200px ${-drawerBleeding}`,
            top: '100px', // top = altura do menu
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            51 results
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            // px: 2,
            // pb: 2,
            height: '100px',
            overflow: 'auto'
          }}
        >
          <Skeleton variant="rectangular" height="auto" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}
