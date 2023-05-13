import Image from "next/image"
import styled from "styled-components"
import Wheel from "../../components/LuckWheel"
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react"

const LogoContainer = styled.div`
  z-index: 999;
  position: relative;
  bottom: -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default function Lottery(){
    return <>
        <ConnectWallet 
          accentColor="#1E90FF"
          colorMode="dark"
          className="btn-connect-wallet"
        />
        <LogoContainer>
        <Image src={'/posipool-shadow.png'} alt="Posi brand" width={65} height={65} />
        </LogoContainer>
        <Wheel></Wheel>
        <Web3Button
          contractAddress="0x950324A30921F9d26a0372ec99DD0aA79116A147"
          contractAbi={[
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_ticketPrice",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "action",
                  "type": "string"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "timestamp",
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
                  "components": [
                    {
                      "internalType": "uint16",
                      "name": "tickets",
                      "type": "uint16"
                    },
                    {
                      "internalType": "uint16",
                      "name": "amount",
                      "type": "uint16"
                    }
                  ],
                  "indexed": false,
                  "internalType": "struct Roulette.Player",
                  "name": "player",
                  "type": "tuple"
                },
                {
                  "indexed": false,
                  "internalType": "uint16",
                  "name": "posis",
                  "type": "uint16"
                },
                {
                  "indexed": false,
                  "internalType": "uint16",
                  "name": "tickets",
                  "type": "uint16"
                }
              ],
              "name": "RewardLog",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint16",
                  "name": "prizeIndex",
                  "type": "uint16"
                },
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "uint16",
                      "name": "weight",
                      "type": "uint16"
                    },
                    {
                      "internalType": "uint16",
                      "name": "posis",
                      "type": "uint16"
                    },
                    {
                      "internalType": "uint16",
                      "name": "tickets",
                      "type": "uint16"
                    }
                  ],
                  "indexed": false,
                  "internalType": "struct Roulette.Prize",
                  "name": "prize",
                  "type": "tuple"
                }
              ],
              "name": "SpinResult",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "uint16",
                  "name": "numTickets",
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
                  "internalType": "uint16",
                  "name": "prizeIndex",
                  "type": "uint16"
                }
              ],
              "name": "getPrizeByIndex",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "uint16",
                      "name": "weight",
                      "type": "uint16"
                    },
                    {
                      "internalType": "uint16",
                      "name": "posis",
                      "type": "uint16"
                    },
                    {
                      "internalType": "uint16",
                      "name": "tickets",
                      "type": "uint16"
                    }
                  ],
                  "internalType": "struct Roulette.Prize",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "isSpinning",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address payable",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "prizes",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint16",
                  "name": "weight",
                  "type": "uint16"
                },
                {
                  "internalType": "uint16",
                  "name": "posis",
                  "type": "uint16"
                },
                {
                  "internalType": "uint16",
                  "name": "tickets",
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
                  "name": "_newPrice",
                  "type": "uint256"
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
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
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
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vrf",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "result",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]}
          action={(contract) => console.log({contract})}
          onError={(error)=> console.log(error)}
        >
          Spin
        </Web3Button>
    </>
}