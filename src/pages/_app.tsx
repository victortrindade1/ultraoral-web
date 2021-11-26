import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { AnimatePresence } from 'framer-motion'
// import { DefaultSeo } from 'next-seo'
import { useMediaQuery } from '@mui/material'

import TopMenu from '../components/TopMenu/TopMenu'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export default function MyApp({
  Component,
  pageProps,
  router
}: AppProps): JSX.Element {
  const url = `https://genteodontologia.com.br${router.route}`

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <>
      {/* <Head>
        <title>Gente Odontologia</title>
      </Head> */}
      {/* <DefaultSeo
        titleTemplate="%s - James Wallis"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'The personal website for James Wallis, developer.',
          site_name: 'James Wallis | wallis.dev',
          images: []
        }}
        canonical={url}
      /> */}
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {/* <Header /> */}
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
          </AnimatePresence>
          <Footer isBreakpoint={isBreakpoint} />
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}
