import React, { useState, useCallback, useEffect } from 'react'

import TopMenuMobile from '../TopMenuMobile'
import TopMenuDesktop from '../TopMenuDesktop'

import { Container } from './styles'

const useMediaQuery = width => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback(e => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    //   mql.addEventListener("change", () => {
    //     this.checkNative();
    // });

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', updateTarget)
  }, [updateTarget, width])

  return targetReached
}

const TopMenu: React.FC = () => {
  const isBreakpoint = useMediaQuery(768)

  return (
    <Container isBreakingpoint={isBreakpoint}>
      {isBreakpoint ? <TopMenuMobile /> : <TopMenuDesktop />}
    </Container>
  )
}

export default TopMenu
