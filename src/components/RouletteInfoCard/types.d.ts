interface RoulettePlayerInfo {
  spins: number
}

interface RouletteInfoCardProps {
  amountOfSpin: number
  contract: string
  drawResult: any
  rouletteWinner: { id: number; name: string } | null
}
