import React from 'react'

// import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import { Container } from './styles'

interface DropdownProps {
  open: boolean
  children: React.ReactNode
}

export function SimpleDropDown(props: DropdownProps) {
  return (
    <Container className={'my-dropdown-slidedown'}>
      {props.open ? props.children : null}
    </Container>
  )
}
