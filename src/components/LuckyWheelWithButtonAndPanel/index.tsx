import React, { useEffect, useState } from 'react';
//@ts-ignore
import {LuckWheelPrize, LuckyWheel} from '@lucky-canvas/react'
import { useReward } from 'react-rewards';
import Div from './style'
import { Web3Button, useAddress, useContract } from '@thirdweb-dev/react';
import style from "./style.module.css"
import Image from "next/image"
import styled from "styled-components"
import { SmartContract } from '@thirdweb-dev/sdk';
import RouletteWinners from '../RouletteWinners';
import { Button, Grid, GridItem } from '@chakra-ui/react';
import RouletteInfoCard from '../RouletteInfoCard';

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
    const [amountOfSpin, setAmountOfSpin] = useState(1);
    const [drawResult, setDrawResult] = useState<SmartContract | any>()
    const [rouletteWinner, setRouletteWinners] = useState<{id: number, name: string} | null>(null)
    const { reward, isAnimating } = useReward('rewardId', 'confetti', {zIndex: 9999999, lifetime: 200, angle: 85 });
    const background = "#0865a1"
    const buttons = [
      { radius: "30px", background: "rgb(0, 53, 87)" },
      { radius: "29px", background: background },
      {
        radius: "10%",
        pointer: false,
        // fonts: [{ text: "Spin", top: "-10px", fontColor: 'white', rotate: true }],
        imgs: [{src: 'posipool-logo-oficial.svg', top: -15, width: '100%'}]
      },
    ];
    const accelerationTime = 2500
    const decelerationTime = 2500
    const stopRouletteTime = 5000
    const prizesName = ['LOSE', '2 POSI', '0.5 POSI', '3 POSI','LOSE', '1 SPIN', '0.5 POSI', '4 POSI', 'LOSE', '5 POSI', '0.5 POSI', '1 SPIN']
    const  fontSize = 15
    const background2 = "white"
    const address = useAddress()

    const prizes = prizesName.map((prizeName, index) => {
      return (index % 2)? { background, fonts: [{ text: prizeName, top: 25, fontColor: 'white', fontSize }], } :
      { background: background2, imgs: [{src: 'posipool-logo-metatags.svg', top: 65, width: 45}],fonts: [{ text: prizeName, top: 25, fontColor:  (prizeName ==='LOSE')? '#3d0710':'#0865a1', fontSize }] }
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
      prize.fonts[0].text != 'LOSE' && reward()
      setRouletteWinners({name: prize.fonts[0].text, id: Date.now()})
      setIsSpinning(false)
    }

    async function callRouletteContract(contract: SmartContract) {
      const transactionWeiCost = (await contract.call('getWeiPrice', address, amountOfSpin))._hex
      const resultsList: any = await contract.call('spin', amountOfSpin, {
        gasLimit: 250000,
        value: transactionWeiCost
      })
      setDrawResult(resultsList)
      for(const result of resultsList.receipt.events[0].args[1]) {
        await spinRoulette(getRandomIndex(result))
      }
      return resultsList
    }
    
    function handleIncrement () {
      if (amountOfSpin <30) {
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

    function getRandomIndex(_prize: string): number {
      let result = prizesName.map((x, i) => x == _prize.replace('_', ' ') ? i: -1).filter(i => i >= 0 );
      let rnd = parseInt((result.length - (Math.random() * result.length)).toString());
      return result[rnd]
    }
  return <>
  <Grid
    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
    gap={{ base: "1rem", md: "2rem" }}
    autoFlow={{ base: "row", md: "row", lg: "column" }}
    justifyItems={{ base: "center", md: "center", lg: "center" }}
    alignItems={{ base: "center", md: "center", lg: "center" }}
    px={{ base: "1rem", md: "2rem" }}
    py={{ base: "1rem", md: "2rem" }}
  >
    <GridItem colSpan={{ base: 1, md: 1, lg: 1 }}
    order={{ base: 3, md: 1, lg: 1 }}
    >

  <RouletteWinners rouletteWinner={rouletteWinner} contract={drawResult}></RouletteWinners>
    </GridItem>
    <GridItem colSpan={{ base: 1, md: 1, lg: 1 }}
    order={{ base: 1, md: 1, lg: 1 }}
    >

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
          // onSuccess={(contract)=> setDrawResult(contract)}
          onSubmit={()=> console.log('chamada enviada')}
          contractAddress={props.contract.address}
          contractAbi={props.contract.abi}
          action={callRouletteContract}
          key={5}
          onError={(error)=> {
            console.log(error)
            setIsSpinning(false)
            return error
          }}
          >{`${amountOfSpin} Spin`}</Web3Button>
          <Button isDisabled={isSpinning || (amountOfSpin === 30)} marginTop={2} width={3} height={'34px'} onClick={handleIncrement}>+</Button>
          </div>
          </Div>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1, lg: 1 }}
          order={{ base: 2, md: 1, lg: 1 }}
        >
        <RouletteInfoCard rouletteWinner={rouletteWinner} drawResult={drawResult} amountOfSpin={amountOfSpin} contract={props.contract.address}/>
      </GridItem>
      </Grid>
  </>
  }