import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from './style'
import { ThemeProvider } from 'styled-components'
// import { theme } from '../theme'
const theme = {}
import { Poppins } from '@next/font/google'

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}
