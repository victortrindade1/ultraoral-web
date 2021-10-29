import React from 'react'

import backIcon from '../../assets/icons/icon_back.svg'

import { Container, Title, Subtitle, BackButton } from './styles'

interface IProps {
  title: string
  subtitle?: string
  center?: boolean
  back?: boolean
}

const PageTitle = ({
  title,
  subtitle = '',
  center = false,
  back = true
}: IProps): JSX.Element => (
  <Container>
    {back && <BackButton src={backIcon} alt="Voltar" />}
    {/* <div className="mt-14 lg:mt-32 font-light w-full text-black dark:text-white"> */}
    {/* <h1 className={`text-4xl sm:text-5xl lg:text-6xl mb-2 ${center && 'md:text-center'}`}> */}
    <Title center={center}>{title}</Title>

    {subtitle && (
      <Subtitle>
        {/* <p className="text-2xl sm:text-3xl lg:text-4xl w-11/12 sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-3/5"> */}
        {subtitle}
      </Subtitle>
    )}

    {/* </div> */}
  </Container>
)

export default PageTitle
