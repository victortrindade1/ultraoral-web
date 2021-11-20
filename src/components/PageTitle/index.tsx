import React from 'react'
import { useMediaQuery } from '@mui/material'
// import { useRouter } from 'next/router'
import Link from '../NoScrollLink'

import backIcon from '../../assets/icons/icon_back.svg'

import { Container, TextContainer, Title, Subtitle, BackButton } from './styles'
// import { Button } from '@material-ui/core'

interface IProps {
  title: string
  subtitle?: string
  back?: boolean
}

const PageTitle = ({
  title,
  subtitle = '',
  back = true
}: IProps): JSX.Element => {
  const isBreakpoint = useMediaQuery('(max-width:768px)')

  // const router = useRouter()

  return (
    <Container isBreakpoint={isBreakpoint}>
      {back && isBreakpoint && (
        <Link href={'/'}>
          {/* <Button> */}
          <BackButton src={backIcon} alt="Voltar" />
          {/* </Button> */}
        </Link>
      )}
      <TextContainer isBreakpoint={isBreakpoint}>
        <Title isBreakpoint={isBreakpoint}>{title}</Title>
        {subtitle && (
          <Subtitle isBreakpoint={isBreakpoint}>{subtitle}</Subtitle>
        )}
      </TextContainer>
    </Container>
  )
}
export default PageTitle
