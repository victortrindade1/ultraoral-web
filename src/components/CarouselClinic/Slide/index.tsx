import React from 'react'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { Paper } from '@material-ui/core'
// import Button from '@mui/material/Button';

// import PageLoader from '../../PageLoader'

import { Container, ImageStyled } from './styles'

interface ISlide {
  id: number
  url: any
  alt: string
}

const Slide: React.FC<ISlide> = ({ url, alt, id }: ISlide) => {
  // const [loading, setLoading] = useState(false)

  // const router = useRouter()

  // useEffect(() => {
  //   router.events.on('routeChangeStart', () => setLoading(false))

  //   return () => {
  //     router.events.off('routeChangeStart', () => setLoading(true))
  //   }
  // }, [router.events])

  // const myLoader = ({ src, width, quality }) => {
  //   return `http://localhost:3000/${src}?w=${width}&q=${quality || 25}`
  // }

  return (
    <Container>
      {/* {loading ? (
        <PageLoader />
      ) : ( */}
      <ImageStyled
        src={url}
        alt={alt}
        layout={'responsive'}
        // loader={myLoader}
      />
      {/* )} */}
      {/* <Image src={url} alt={alt} /> */}
    </Container>
  )
}

export default Slide
