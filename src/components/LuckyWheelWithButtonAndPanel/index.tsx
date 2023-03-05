import React, { useEffect, useState } from 'react';
//@ts-ignore
import {LuckWheelPrize, LuckyWheel} from '@lucky-canvas/react'
import { useReward } from 'react-rewards';
import Div from './style'
import { Web3Button } from '@thirdweb-dev/react';
import style from "./style.module.css"
import Image from "next/image"
import styled from "styled-components"

  const LogoContainer = styled.div`
    z-index: 999;
    position: relative;
    bottom: -15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  export default function LuckyWheelWithButtonAndPanel (props: WheelProps) {
    const [prize, setPrize] = useState<number>()
    const myLucky = React.useRef<LuckyWheel>(null);
    const { reward, isAnimating } = useReward('rewardId', 'confetti', {zIndex: 9999999, lifetime: 200, angle: 85, onAnimationComplete: ()=> {console.log('completou')}  });
    useEffect(()=> {
      setPrize((Math.random() * 6) >> 0)
    }, [isAnimating])
    const background = "#0865a1"
    const buttons = [
      { radius: "30px", background: "rgb(0, 53, 87)" },
      { radius: "29px", background: background },
      {
        radius: "10%",
        pointer: false,
        fonts: [{ text: "Spin", top: "-10px", fontColor: 'white', rotate: true }],
        // imgs: [{src: 'https://images.freeimages.com/images/previews/531/letter-c-1641882.png', top: -150, width: '100%'}]
      },
    ];

    const prizesName = ['Lose', '1 Posi', 'Lose', '2 Posi', '+1 spin', '3 Posi', 'Lose', '4 Posi', '+2 spin', '8 Posi']
    const  fontSize = 20

    const background2 = "white"
    const prizes = prizesName.map((prizeName, index) => {
      return (index % 2)? { background, imgs: [{src: '/moneybag2.png', top: 50, width: 80}], fonts: [{ text: prizeName, top: 25, fontColor: 'white', fontSize }], } :
      { background: background2, fonts: [{ text: prizeName, top: 25, fontColor:  (prizeName ==='Lose')? '#3d0710':'#0865a1', fontSize }] }
    })

    function onSuccess() {
      setTimeout(() => {
        myLucky.current?.stop(4);
      }, 5000);
      console.log('success')
    }

    function onStart() {
      myLucky.current?.play();
      onSuccess()
      console.log('start')
    }

    function onEnd(prize: LuckWheelPrize) {
      console.log(prize.fonts[0].text)
      console.log('Sorteado: ' + prize.fonts[0].text)
      prize.fonts[0].text != 'Lose' && reward()
    }
return <>
    <Div id="rewardId">
    <LogoContainer>
      <Image src={'/posipool-shadow.png'} alt="Posi brand" width={65} height={65} />
    </LogoContainer>
    
    <LuckyWheel
        ref={myLucky}
        defaultConfig={{speed:22, gutter: 1, accelerationTime: 2500, decelerationTime: 3000}}
        // activeStyle={{fontColor: 'pink', fontSize: 25, fontWeight: 50, background: 'red', shadow: ''}}
        width="350px"
        height="350px"
        prizes={prizes}
        buttons={buttons}
        onStart={onStart}
        onEnd={(a:any)=> {
          onEnd(a)
        }} 
        />

        <Web3Button
        className={style['spin-button']}
        accentColor="#0a93eb"
        onSuccess={(contract)=> {
          console.log(contract)
        }}
        // onSubmit={()=> console.log('chamada enviada')}
        contractAddress={props.contract.address}
        contractAbi={props.contract.abi}
        action={async (contract) => {
          console.log({contract})
          // Executar chamada do contract aqui
          await dummyContractCall(1000)
          onStart()
          }}
          onError={(error)=> console.log(error)}
        >Spin</Web3Button>
        </Div>
  </>
  }
  
  async function dummyContractCall(time: number) {
    const result = Math.random()
    return new Promise((resolve, reject) =>
    setTimeout(() => {
      if(result < 0.5){
        console.log(result,'testando');
        resolve(resolve)
      }else{
        reject(result + ' falhou')
      }
    }, time)
    )
  }