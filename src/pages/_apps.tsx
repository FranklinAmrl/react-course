import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <title>React Avançado - Boilerplate</title>
        <meta
            name="description"
            content="A simple project starter to work with Typescript, React, NextJS and
            Styled Components"
        />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
  )
}

export default App