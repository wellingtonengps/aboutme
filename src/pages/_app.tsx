import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from '../components/Header'
import { Wrapper } from '../styles/app.modules'
import Perfil from '../components/Perfil'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Perfil />
        <main>
          <Header />
          <Component {...pageProps} />

        </main>
      </Wrapper>
    </ThemeProvider>
  )
}

export default MyApp
