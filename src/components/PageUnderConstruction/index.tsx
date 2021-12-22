import React from 'react'
import Image from 'next/image'

import img from '../../assets/other/page_under_construction.png'

import { Container } from './styles'

const PageUnderConstruction: React.FC = () => {
  return (
    <Container>
      <Image src={img} width={392} height={214} alt="Em construção" />
    </Container>
  )
}

export default PageUnderConstruction
