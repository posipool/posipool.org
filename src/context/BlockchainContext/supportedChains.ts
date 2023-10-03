import { PosichainShard0, PosichainTestnetShard0 } from '@thirdweb-dev/chains'

export const supportedChains = [process.env.NODE_ENV === 'production' ? PosichainShard0 : PosichainTestnetShard0]
