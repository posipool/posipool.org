import Card from '../Card'
import { CSSProperties, useContext } from 'react'
import { Title } from '../Card2/style'
import { Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { Web3Button } from '@thirdweb-dev/react'
import TooltipIcon from '../ToolTipIcon'
import contract from './contract'
import ChainContext from '../../context/BlockchainContext'

export default function ClainTicketCard() {
  const {
    selectedChain,
    // setSelectedChain
  } = useContext(ChainContext)
  console.log({ selectedChain })
  const style: CSSProperties = {
    minHeight: 80,
    minWidth: 350,
    padding: '0px 14px 14px 14px',
  }

  const web3ButtonStyle: CSSProperties = {}

  const ticketValuesStyle: CSSProperties = {
    fontSize: 24,
  }
  const cardTitleStyle: CSSProperties = {
    margin: 10,
  }

  const ticketPercentValueStyle: CSSProperties = {
    color: 'GrayText',
    fontSize: 13,
  }

  const ticketApr = (0).toFixed(4)
  const ticketAvailableToClaim = (0).toFixed(4)
  const toolTipIconText =
    'It is a reward that all Posi Pool delegators can claim. Delegate to the Posi Pool validator and earn this extra prize! You can use this Ticket in several smart contracts available on the Posi Pool platform.'
  return (
    <Card style={style}>
      <Title style={cardTitleStyle}>
        <Center>
          <span>Ticket Bounty</span>
          <TooltipIcon text={toolTipIconText}></TooltipIcon>
        </Center>
      </Title>
      <Grid column={2} justifyContent={'space-between'}>
        <GridItem gridColumn={1}>
          <Text style={ticketValuesStyle}>{ticketAvailableToClaim}</Text>
          <Center>
            <Text style={ticketPercentValueStyle}>APR: {ticketApr}%</Text>
          </Center>
        </GridItem>
        <GridItem gridColumn={2} display="flex" alignItems="center">
          <Web3Button
            contractAbi={contract.abi}
            contractAddress={contract.addresses[selectedChain]}
            action={(contract) => {
              console.log(contract)
            }}
            style={web3ButtonStyle}
          >
            Claim
          </Web3Button>
        </GridItem>
      </Grid>
    </Card>
  )
}
