import { PropsWithChildren } from 'react'
import { CardStyle } from './style'

function Card(props: PropsWithChildren) {
  return <CardStyle>{props.children}</CardStyle>
}

export default Card
