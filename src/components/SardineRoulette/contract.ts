const address: string = '0x775798455B6AE7a50627cE7DDF77C3EA93ea317a'
const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'spinEvent',
    type: 'event',
  },
  {
    inputs: [],
    name: 'destroy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getWeiBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_player',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_spins',
        type: 'uint256',
      },
    ],
    name: 'getWeiPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'locked',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'playerInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'spins',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'blocked',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'prizes',
    outputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'posis',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'spins',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'weight',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_enabled',
        type: 'bool',
      },
    ],
    name: 'setLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'posis',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'spins',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'weight',
            type: 'uint256',
          },
        ],
        internalType: 'struct Lukywheel.Prize[]',
        name: '_prizes',
        type: 'tuple[]',
      },
    ],
    name: 'setPrizes',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sum',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newPrice',
        type: 'uint256',
      },
    ],
    name: 'setWeiPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_spins',
        type: 'uint256',
      },
    ],
    name: 'spin',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'spinPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSpins',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_player',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_spins',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_blocked',
        type: 'bool',
      },
    ],
    name: 'updatePlayer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawWei',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
const contract = {
  address,
  abi,
}
export default contract
