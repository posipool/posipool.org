import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
`

const HomeStyle = styled.main`
  height: 75vh;
  display: flex;
  justify-content: center;
`

export default HomeStyle

export { GlobalStyle }
