import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from './style'
import { ThemeProvider } from 'styled-components'
// import { theme } from '../theme'
import { Poppins } from '@next/font/google'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { PosichainShard0 } from '@thirdweb-dev/chains'
import Navbar from '../components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
const theme = {}

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ThirdwebProvider 
        activeChain={{
          ...PosichainShard0,
          rpc: [PosichainShard0.rpc[1]]
        }}
        dAppMeta={{
          name: 'Posi Pool',
          description: 'Your finacial freedon start here!',
          logoUrl: 'https://www.posipool.org/posipool-logo-oficial.svg',
          url: 'https://posipool.org',
          isDarkMode: true
        }}
        >
          <ChakraProvider>
            <Navbar></Navbar>
            <Component {...pageProps} />
          </ChakraProvider>
        </ThirdwebProvider>
      </ThemeProvider>
    </main>
  )
}
