import React, { useState } from 'react'
import { Global } from '@emotion/react'

import { MenuContainer, VisibleMenu, HiddenMenu, Puller } from './styles'

const TopMenuMobile: React.FC = () => {
  const [open, setOpen] = useState(false)

  const drawerBleeding = 50 // Altura arrastável

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
        <Puller />
      </VisibleMenu>
      <HiddenMenu>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          perspiciatis blanditiis nisi consequatur et veniam, maiores sint iusto
          eum numquam tempore alias voluptate, architecto molestias minima
          dolore, natus odio aliquid!
        </p>
      </HiddenMenu>
    </MenuContainer>
  )
}

export default TopMenuMobile
