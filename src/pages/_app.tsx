import '../styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import Navbar from '../components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { supportedChains } from '../context/BlockchainContext/supportedChains'
import ChainContext from '../context/BlockchainContext'
import { SupportedChains } from '../context/BlockchainContext/types'
const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const [selectedChain, setSelectedChain] = useState<SupportedChains>('posichain-shard-0')
  return (
    <main className={poppins.className}>
      <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
        <ThirdwebProvider
          autoConnect={true}
          supportedChains={supportedChains}
          activeChain={supportedChains[0]}
          dAppMeta={{
            name: 'Posi Pool',
            description: 'Your finacial freedon start here!',
            logoUrl: 'https://www.posipool.org/posipool-logo-oficial.svg',
            url: 'https://posipool.org',
            isDarkMode: true,
          }}
        >
          <ChakraProvider theme={theme}>
            <Navbar></Navbar>
            <Component {...pageProps} />
          </ChakraProvider>
        </ThirdwebProvider>
      </ChainContext.Provider>
    </main>
  )
}
