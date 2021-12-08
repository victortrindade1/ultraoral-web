import React from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Logo from '../components/Logo'

import IResponsive from '../interfaces/IResponsive'

import { Container } from '../styles/pages/CasosClinicos'

const CasosClinicos: NextPage<IResponsive> = ({
  isBreakpoint
}: IResponsive) => {
  const title = 'Casos Clínicos'
  const subtitle =
    'Com planejamento, dedicação e atenção, oferecemos os melhores tratamentos'

  return (
    <Layout title={`${title} - Gente`} description={`${title} - ${subtitle}`}>
      <Container>
        <PageTitle
          title={title}
          subtitle={subtitle}
          isBreakpoint={isBreakpoint}
        />
      </Container>
      <Logo />
    </Layout>
  )
}

export default CasosClinicos
