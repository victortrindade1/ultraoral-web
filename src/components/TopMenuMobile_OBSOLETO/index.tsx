import React, { useState } from 'react'
import { Global } from '@emotion/react'

import { MenuContainer, VisibleMenu, HiddenMenu, Puller } from './styles'

const TopMenuMobile: React.FC = () => {
  const [open, setOpen] = useState(false)

  const drawerBleeding = 40 // Altura arrastável

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <MenuContainer
      anchor="top"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true
      }}
      // variant="permanent"
    >
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: 'auto',
            overflow: 'visible'
          }
        }}
      />
      <VisibleMenu onClick={toggleDrawer(true)}>
        <Puller onClick={toggleDrawer(true)} />
      </VisibleMenu>
      <HiddenMenu></HiddenMenu>
    </MenuContainer>
  )
}

export default TopMenuMobile
