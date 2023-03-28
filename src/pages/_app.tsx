import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { PosichainShard0, HarmonyShard0 } from '@thirdweb-dev/chains'
import Navbar from '../components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../_theme'

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
        <ThirdwebProvider 
      supportedChains={[]}
       activeChain={PosichainShard0}
        dAppMeta={{
          name: 'Posi Pool',
          description: 'Your finacial freedon start here!',
          logoUrl: 'https://www.posipool.org/posipool-logo-oficial.svg',
          url: 'https://posipool.org',
          isDarkMode: true
        }}
        >
          <ChakraProvider theme={theme}>
            <Navbar></Navbar>
            <Component {...pageProps} />
          </ChakraProvider>
        </ThirdwebProvider>
    </main>
  )
}
