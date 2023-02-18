import React, { useEffect, useState } from 'react';
import {LuckyWheel} from '@lucky-canvas/react'
import { useReward } from 'react-rewards';
import Div from './style'

  export default function Wheel (props) {
    const [prize, setPrize] = useState()
    const myLucky = React.useRef();
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
        fonts: [{ text: "Rodar", top: "-10px", fontColor: 'white', rotate: true }],
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
      console.log('success')
    }

    function onStart() {
      myLucky.current.play();
      setTimeout(() => {
        myLucky.current.stop(prize);
      }, 5000);
      console.log('start')
    }

    function onEnd(prize) {
      console.log()
      console.log('Sorteado: ' + prize.fonts[0].text)
      prize.fonts[0].text != 'Lose' && reward()
    }
return <>
    <Div id="rewardId">
    <LuckyWheel
        defaultConfig={{speed:22, gutter: 1, accelerationTime: 2500, decelerationTime: 3000}}
        // activeStyle={{fontColor: 'pink', fontSize: 25, fontWeight: 50, background: 'red', shadow: ''}}
        ref={myLucky}
        width="350px"
        height="350px"
        prizes={prizes}
        buttons={buttons}
        onSuccess={onSuccess}
        // onStart={onStart}
        onEnd={onEnd} 
        />
        <button onClick={onStart}>Spin</button>
        </Div>
  </>
  }