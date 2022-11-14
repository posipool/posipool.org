import styled from "styled-components"
import { palette, darkTheme, theme } from "../../theme"

const btn = styled.button`
  /* font-family: ; */
  font-size: 14px;
  font-weight: 400;
  min-height: 48px;
  color: ${theme.global.colors.headerText};
  /* margin: 0; */
  border-radius: 24px;
  cursor: pointer;
  border: none;
  white-space: nowrap;
  width: 150px;
  outline: none;
  /* letter-spacing: 0.1rem; */

  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  user-select: none;
  padding: 1rem 2.7rem;
  margin: 0.5rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }
`

const button = styled(btn)`
  text-decoration: none;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
    0 1px 1px rgba(0, 0, 0, 0.05);
  border-bottom-width: 0.5rem;
  background: ${theme.global.colors.brand};

  &:hover {
    background-color: ${theme.global.colors.backgroundToaster};
  }

  &:active {
    border-bottom-width: 0.1rem;
    border-top-width: 0.5rem;
  }
`

export default button
