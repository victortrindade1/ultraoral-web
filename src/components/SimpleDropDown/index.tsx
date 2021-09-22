import React from 'react'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

interface DropdownProps {
  open: boolean
  children: React.ReactNode
}

export function SimpleDropDown(props: DropdownProps) {
  return (
    <SlideDown className={'my-dropdown-slidedown'}>
      {props.open ? props.children : null}
    </SlideDown>
  )
}
