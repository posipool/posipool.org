const address: string = '0x9F72BFC848179f2b0a02048031F494ee4cEC7674'
const abi = [
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_ticketPrice",
        "type": "uint16"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "string",
        "name": "action",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "blocknumber",
        "type": "uint256"
      }
    ],
    "name": "ActionLog",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "weight",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "posis",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "tickets",
            "type": "uint8"
          }
        ],
        "indexed": false,
        "internalType": "struct Lukywheel.Prize",
        "name": "prize",
        "type": "tuple"
      }
    ],
    "name": "RewardLog",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "b",
        "type": "uint256"
      }
    ],
    "name": "vrflog",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_numTickets",
        "type": "uint16"
      }
    ],
    "name": "buyTickets",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getContractBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_player",
        "type": "address"
      }
    ],
    "name": "getPlayer",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "tickets",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "balance",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "games",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "wins",
            "type": "uint16"
          },
          {
            "internalType": "bool",
            "name": "blocked",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "internalType": "struct Lukywheel.Player",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_player",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "tickets",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "balance",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "games",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "wins",
            "type": "uint16"
          },
          {
            "internalType": "bool",
            "name": "blocked",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "internalType": "struct Lukywheel.Player",
        "name": "_info",
        "type": "tuple"
      }
    ],
    "name": "setPlayerInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_newPrice",
        "type": "uint16"
      }
    ],
    "name": "setTicketPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "spin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "spinCount",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticketPrice",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const contract = {
  address,
  abi
}

export default contract