import React, { useEffect, useState } from 'react';
//@ts-ignore
import {LuckWheelPrize, LuckyWheel} from '@lucky-canvas/react'
import { useReward } from 'react-rewards';
import Div from './style'
import { Web3Button } from '@thirdweb-dev/react';
import style from "./style.module.css"
import Image from "next/image"
import styled from "styled-components"
import { SmartContract } from '@thirdweb-dev/sdk';
import RouletteWinners from '../RouletteWinners';
import { Button } from '@chakra-ui/react';
import { ethers } from 'ethers';

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
    const myLucky = React.useRef<LuckyWheel>(null);
    const [ isSpinning, setIsSpinning ] = useState(false)
    const [amountOfSpin, setAmountOfSpin] = useState(0);
    const { reward, isAnimating } = useReward('rewardId', 'confetti', {zIndex: 9999999, lifetime: 200, angle: 85, onAnimationComplete: ()=> {console.log('completou')}  });
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
    const accelerationTime = 2500
    const decelerationTime = 2500
    const stopRouletteTime = 5000    
    const prizesName = ['Lose', '2 Posi', 'Lose', '3 Posi', '+1 Spin', '4 Posi', 'Lose', '5 Posi', '+2 Spin', '6 Posi']
    const  fontSize = 20
    const background2 = "white"
    const prizes = prizesName.map((prizeName, index) => {
      return (index % 2)? { background, imgs: [{src: '/moneybag2.png', top: 50, width: 80}], fonts: [{ text: prizeName, top: 25, fontColor: 'white', fontSize }], } :
      { background: background2, fonts: [{ text: prizeName, top: 25, fontColor:  (prizeName ==='Lose')? '#3d0710':'#0865a1', fontSize }] }
    })

    async function onSuccess(resultado: number) {
      await wait(stopRouletteTime)
      myLucky.current?.stop(resultado);
      await wait(decelerationTime + 500)
    }

    async function spinRoulette(resultado:number) {
      setIsSpinning(true)
      myLucky.current?.play();
      await onSuccess(resultado)
    }

    function onEnd(prize: LuckWheelPrize) {
      console.log('Prize: ' + prize.fonts[0].text)
      prize.fonts[0].text != 'Lose' && reward()
      setIsSpinning(false)
    }

    async function callRouletteContract(contract: SmartContract) {
      const resultsList: number[] = await contract.call('spin', amountOfSpin, {
        value: ethers.utils.parseEther(amountOfSpin.toString()).toString()
      })
      // const resultsList = Array.from({ length: amountOfSpin }, () => Math.floor(Math.random() * 8)); Simulate list of prizes drawn
      for(const result of resultsList) {
        await spinRoulette(result)
      }
      return resultsList
    }

    function handleIncrement () {
      if (amountOfSpin <10) {
        setAmountOfSpin((prevAmount) => prevAmount + 1);
      }
    }

    function handleDecrement() {
      if (amountOfSpin > 0) {
        setAmountOfSpin((prevAmount) => prevAmount - 1);
      }
    }

    function wait(time: number){
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, time);
      })
    }
  return <>
  <RouletteWinners></RouletteWinners>
    <Div id="rewardId">
    <LogoContainer>
      <Image src={'/posipool-shadow.png'} alt="Posi brand" width={65} height={65} />
    </LogoContainer>
    
    <LuckyWheel
        ref={myLucky}
        defaultConfig={{speed:22, gutter: 1, accelerationTime, decelerationTime}}
        // activeStyle={{fontColor: 'pink', fontSize: 25, fontWeight: 50, background: 'red', shadow: ''}}
        width="350px"
        height="350px"
        prizes={prizes}
        buttons={buttons}
        // onStart={onStart}
        onEnd={onEnd}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          minWidth: 195
        }}>
        <Button isDisabled={isSpinning || (amountOfSpin === 0)} marginTop={2} width={3} height={'34px'} onClick={handleDecrement}>-</Button>
        <Web3Button
        isDisabled={isSpinning || (amountOfSpin === 0)}
        className={style['spin-button']}
        accentColor="#0a93eb"
        onSuccess={(contract)=> console.log('success',contract)}
        onSubmit={()=> console.log('chamada enviada')}
        contractAddress={props.contract.address}
        contractAbi={props.contract.abi}
        action={callRouletteContract}
        onError={(error)=> {
          console.log(error)
          setIsSpinning(false)
        }}
        >{`${amountOfSpin} Spin`}</Web3Button>
        <Button isDisabled={isSpinning || (amountOfSpin === 10)} marginTop={2} width={3} height={'34px'} onClick={handleIncrement}>+</Button>
        </div>
        </Div>
  </>
  }