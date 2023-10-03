// import { useAddress, useContract, useContractEvents } from '@thirdweb-dev/react'
import { CardBody, Divider, Grid, GridItem } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Card from '../Card'

export default function RouletteWinners(props: RouletteWinnersProps) {
  interface PrizeHistory {
    prize: string
    timestamp: string
    transactionHash: string
  }
  const [awardHistory, setAwardHistory] = useState<PrizeHistory[]>([])
  const prizesName = ['LOSE', '2 POSI', '0.5 POSI', '3 POSI', '1 SPIN', '4 POSI', '5 POSI']
  const transactionHash = props.contract?.receipt.transactionHash
  const dateInMilisseconds = props.contract?.receipt.events[0].args[2] * 1000
  const timestamp = dateInMilisseconds ? new Date(dateInMilisseconds).toLocaleString().replace(',', '') : ''
  // const { data, isLoading, error } = useContractEvents(props.contract, "spinEvent", {queryFilter: {filters:{address: useAddress()} } , subscribe: true});
  useEffect(() => {
    const history: PrizeHistory[] = JSON.parse(localStorage.getItem('allPrizes') as string) || []
    if (history.length > 0) {
      console.log({ history })
      setAwardHistory(history)
    }
  }, [])

  useEffect(() => {
    if (props.contract) {
      const newAward = props.contract.receipt.events[0].args[1].map((prize: string) => ({
        prize,
        timestamp,
        transactionHash,
      }))
      const allAwardHistory = [...awardHistory, ...newAward]
      if (allAwardHistory.length > 16) {
        allAwardHistory.splice(0, allAwardHistory.length - 16)
      }
      localStorage.setItem('allPrizes', JSON.stringify(allAwardHistory))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.contract])

  useEffect(() => {
    if (props.rouletteWinner) {
      const allPrizes = [...awardHistory, { prize: props.rouletteWinner.name, timestamp, transactionHash }]
      if (allPrizes.length > 16) {
        allPrizes.splice(0, allPrizes.length - 16)
      }
      setAwardHistory(allPrizes)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.rouletteWinner])
  return (
    <Card marginTop={5} width={350} height={450}>
      <CardBody>
        <Grid>
          <Grid templateColumns="repeat(4,1fr)" gap={6}>
            <GridItem colSpan={2}>Prizes</GridItem>
            <GridItem colSpan={2}>timestamp</GridItem>
          </Grid>
          <Divider></Divider>
          {awardHistory.length > 0 &&
            awardHistory
              .slice(0, 16)
              .reverse()
              .map((award: PrizeHistory, index: number) => {
                return (
                  <Grid key={Date.now() + index} templateColumns="repeat(12,1fr)">
                    <GridItem key={props.rouletteWinner?.id} colSpan={5}>
                      {prizesName[prizesName.indexOf(award.prize.replace('_', ' '))]}
                    </GridItem>
                    <GridItem colSpan={7}>
                      <a
                        style={{ color: '#0182FF' }}
                        href={`https://explorer.posichain.org/tx/${award.transactionHash}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {award.timestamp}
                      </a>
                    </GridItem>
                  </Grid>
                )
              })}
        </Grid>
      </CardBody>
    </Card>
  )
}
