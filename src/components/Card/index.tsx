import { CardProps, Card as ChackraCard } from '@chakra-ui/react'

export default function Card(props: CardProps) {
  return (
    <ChackraCard
      {...props}
      width={props.width || 350}
      backgroundColor={props.backgroundColor || 'blackAlpha.600'}
      borderColor={props.borderColor || 'gray.600'}
      borderWidth={props.borderWidth || 1}
    ></ChackraCard>
  )
}
