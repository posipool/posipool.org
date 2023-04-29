import styled from 'styled-components'

const CardStyle = styled.div`
  z-index: 999999;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #00253c50; */
  border-radius: 160px;
  /* width: 250px; */
  /* height: 200px; */
  padding: 2.5em;
  /* margin: 40px; */
  @media (max-width: 500px) {
    /* background-color: #007dcb; */
    height: 250px;
    width: 100%;
    border-radius: 16px;
  }

  @media (max-height: 350px) {
    /* background-color: #0048ff90; */
    position: absolute;
    display: flex;
    flex-direction: column;
    /* background-color: #00800018; */
    /* width: 300px; */
    padding: 40px;
    margin: 40px;
  }
  /* padding: 3px;  */
`

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  /* padding-top: 20px; */
  padding-bottom: 10px;
  font-family: 'Poppins' sans-serif;
  color: #f1f1f1;
  font-size: 0.92rem;
  @media (max-width: 500px) {
    font-size: 1rem;
    font-weight: 900;
  }
`
const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: #cabebe;
  }
`

const ActionContainer = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translate(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`

export { Title, Date, Description, ActionButton, ActionContainer, CardStyle }
