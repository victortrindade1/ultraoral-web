import React from 'react'
import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'

import backIcon from '../../assets/icons/icon_back.svg'

import { Container, TextContainer, Title, Subtitle, BackButton } from './styles'
import { Button } from '@material-ui/core'

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

  const router = useRouter()

  return (
    <Container isBreakpoint={isBreakpoint}>
      {back && isBreakpoint && (
        <Button onClick={() => router.back()}>
          <BackButton src={backIcon} alt="Voltar" />
        </Button>
      )}
      {/* <div className="mt-14 lg:mt-32 font-light w-full text-black dark:text-white"> */}
      {/* <h1 className={`text-4xl sm:text-5xl lg:text-6xl mb-2 ${center && 'md:text-center'}`}> */}
      <TextContainer isBreakpoint={isBreakpoint}>
        <Title isBreakpoint={isBreakpoint}>{title}</Title>

        {subtitle && (
          <Subtitle isBreakpoint={isBreakpoint}>
            {/* <p className="text-2xl sm:text-3xl lg:text-4xl w-11/12 sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-3/5"> */}
            {subtitle}
          </Subtitle>
        )}
      </TextContainer>

      {/* </div> */}
    </Container>
  )
}
export default PageTitle
