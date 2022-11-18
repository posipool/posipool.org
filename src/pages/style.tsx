import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html{
  position: relative;
  height: 100vh;
  width:100vw;
  /* min-height: 50vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`

const HomeStyle = styled.main`
  width: 100%;
  height: 100%;
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; */
  /* padding: 50px; */
`

export { GlobalStyle, HomeStyle }
