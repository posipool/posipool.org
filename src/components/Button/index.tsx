import ButtonStyle from './style'

function Button(props: { href: string; children: string }) {
  return <ButtonStyle onClick={() => window.open(props.href)}>{props.children}</ButtonStyle>
}

export default Button
