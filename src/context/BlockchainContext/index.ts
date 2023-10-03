import { PosichainShard0 } from '@thirdweb-dev/chains'
import { createContext } from 'react'
import { ChainContextType, SupportedChains } from './types'

const ChainContext = createContext<ChainContextType>({
  selectedChain: PosichainShard0.slug,
  // eslint-disable-next-line no-unused-vars
  setSelectedChain: (chain: SupportedChains) => {},
})

export default ChainContext
