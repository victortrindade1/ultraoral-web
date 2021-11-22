import React from 'react'

import IResponsive from '../../interfaces/IResponsive'

import Link from '../NoScrollLink'

import backIcon from '../../assets/icons/icon_back.svg'

import { Container, TextContainer, Title, Subtitle, BackButton } from './styles'

interface IProps extends IResponsive {
  title: string
  subtitle?: string
  back?: boolean
}

const PageTitle = ({
  title,
  subtitle = '',
  back = true,
  isBreakpoint
}: IProps): JSX.Element => {
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
