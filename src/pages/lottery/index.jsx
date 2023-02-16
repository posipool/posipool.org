import Image from "next/image"
import styled from "styled-components"
import Wheel from "../../components/LuckWheel"

const LogoContainer = styled.div`
  z-index: 999;
  position: relative;
  bottom: -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default function Lottery(){
    return <>
        <LogoContainer>
        <Image src={'/posipool-shadow.png'} alt="Posi brand" width={65} height={65} />
        </LogoContainer>
        <Wheel></Wheel>
    </>
}