import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { Container } from './styles'

const PageLoader: React.FC = () => {
  return (
    <Container>
      <AiOutlineLoading3Quarters />
    </Container>
  )
}

export default PageLoader
