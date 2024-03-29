import { useEffect, useState } from 'react'
import { CardBody, CardHeader, Center, Divider, Grid, GridItem } from '@chakra-ui/react'
import { useAddress, useContract } from '@thirdweb-dev/react'
import Card from '../Card'

export default function RouletteInfoCard(props: RouletteInfoCardProps) {
  const [bonusSpin, setBonusSpin] = useState(0)
  const [bonusSpinUsed, setBonusSpinUsed] = useState(0)
  const { contract } = useContract(props.contract)
  const address = useAddress()
  const spinCost = bonusSpinUsed - bonusSpin

  useEffect(() => {
    address &&
      contract?.call('playerInfo', [address]).then((value: any) => {
        // data.then((value) => {
        setBonusSpin(Number(value.spins))
        // })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  useEffect(() => {
    if (bonusSpin >= bonusSpinUsed) {
      setBonusSpin(bonusSpin - bonusSpinUsed)
    } else {
      setBonusSpin(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.drawResult])

  useEffect(() => {
    console.log(props.rouletteWinner)
    if (props.rouletteWinner?.name === '1 SPIN') setBonusSpin(bonusSpin + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.rouletteWinner])

  useEffect(() => {
    setBonusSpinUsed(bonusSpin - (bonusSpin - props.amountOfSpin))
  }, [bonusSpin, props.amountOfSpin])
  return (
    <Card marginTop={5} width={350} height={450}>
      <Center>
        <CardHeader fontSize={20}>My Spin Info</CardHeader>
      </Center>
      <Center>
        <Divider width={'90%'}></Divider>
      </Center>
      <CardBody>
        <Grid templateColumns="repeat(4, 1fr)" rowGap={2}>
          <GridItem colSpan={3}>Bonus spin available:</GridItem>
          <GridItem colSpan={1}>{bonusSpin}</GridItem>
        </Grid>
      </CardBody>
      <Divider></Divider>
      <Center>
        <CardHeader fontSize={20}>Next Spin Info</CardHeader>
      </Center>
      <Center>
        <Divider width={'90%'}></Divider>
      </Center>
      <CardBody>
        <Grid templateColumns="repeat(4, 1fr)" rowGap={1}>
          <GridItem colSpan={3}>Number of spin:</GridItem>
          <GridItem colSpan={1}>{props.amountOfSpin}</GridItem>
          <GridItem colSpan={3}>Bonus Spins in use:</GridItem>
          <GridItem colSpan={1}>{bonusSpin > props.amountOfSpin ? bonusSpinUsed : bonusSpin}</GridItem>
          <GridItem colSpan={3}>Total cost of spin:</GridItem>
          <GridItem colSpan={1}>{spinCost > 0 ? spinCost : 0} POSI</GridItem>
        </Grid>
      </CardBody>
    </Card>
  )
}
