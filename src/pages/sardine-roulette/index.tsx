import { Center } from '@chakra-ui/react'
import SardineRoulette from '../../components/SardineRoulette'
import Header from '../../components/Header'

export default function SardineRoulettePage() {
  const subtitle = 'Earn POSI with instant payout when you are drawn on this roulette wheel.'
  return (
    <>
      <Center>
        <Header subtitle={subtitle} title="Roullete"></Header>
      </Center>
      <Center justifyContent="space-evenly">
        <SardineRoulette />
      </Center>
    </>
  )
}
