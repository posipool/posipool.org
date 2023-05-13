import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { Arbitrum, Polygon, PosichainShard0 } from '@thirdweb-dev/chains'
import Navbar from '../components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <ThirdwebProvider
        supportedChains={[Arbitrum, Polygon]}
        activeChain={{
          ...PosichainShard0,
          networkId: 900000,
          icon: {
            format: 'png',
            height: 500,
            width: 500,
            url: 'https://ipfs.sea.tube/ipfs/QmdjNSkChaJqiM4hPRpzs1aCFqWxn8MCjghfZS2WmnJMPc',
          },
        }}
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
    </main>
  )
}
