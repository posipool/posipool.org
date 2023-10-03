import { supportedChains } from './supportedChains'

export type SupportedChains = (typeof supportedChains)[number]['slug']

export interface ChainContextType {
  selectedChain: SupportedChains
  setSelectedChain: (chain: SupportedChains) => void
}
