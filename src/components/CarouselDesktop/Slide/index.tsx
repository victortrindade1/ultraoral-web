import React from 'react'
import { Paper } from '@material-ui/core'
import Image from 'next/image'

// import { Container } from './styles'

interface ISlide {
  description?: string
  buttonDescription?: string
  url: any
  alt: string
}

const Slide: React.FC<ISlide> = ({ url, alt }: ISlide) => {
  return (
    <Paper>
      <Image src={url} alt={alt} layout={'fill'} />
    </Paper>
  )
}

export default Slide
