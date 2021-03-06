import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { useMediaQuery } from '@mui/material'

import * as gtag from '../lib/gtag'

// import UnderConstruction from '../components/PageUnderConstruction'
import TopMenu from '../components/TopMenu'
import Footer from '../components/Footer'
import Analytics from '../components/Analytics'

import '../../public/fonts/style.css'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Head from 'next/head'

export default function MyApp({
  Component,
  pageProps
}: // router
AppProps): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const url = `https://genteodontologia.com.br${router.route}`

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Clínica odontológica com tratamento humanizado e qualidade no atendimento."
        />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Gente Odontologia"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url,
          description: 'Gente Odontologia Humanizada',
          site_name: 'Gente Odontologia Humanizada',
          images: []
        }}
        canonical={url}
      />
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <TopMenu isBreakpoint={isBreakpoint} />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component
              {...pageProps}
              canonical={url}
              key={url}
              isBreakpoint={isBreakpoint}
            />
            <Analytics />
          </AnimatePresence>
          <Footer isBreakpoint={isBreakpoint} />
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}
