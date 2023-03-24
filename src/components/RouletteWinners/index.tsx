import { useAddress, useContract, useContractEvents } from "@thirdweb-dev/react";
import { Card , CardBody, Center, Divider, Grid, GridItem } from '@chakra-ui/react'
import {useEffect, useState} from 'react'

export default function RouletteWinners(props: RouletteWinnersProps){
    interface PrizeHistory {
        prize: string
        transactionHash: string | null
    }
    const [awardHistory, setAwardHistory] = useState<PrizeHistory[]>([])
    const prizesName = ['LOSE', '2 POSI', '0.5 POSI', '3 POSI', '1 SPIN', '4 POSI', '5 POSI']
    const transactionHash = props.contract?.receipt.transactionHash
    // const { data, isLoading, error } = useContractEvents(props.contract, "spinEvent", {queryFilter: {filters:{address: useAddress()} } , subscribe: true});
    useEffect(()=> {
        const history: PrizeHistory[] = JSON.parse(localStorage.getItem('allPrizes') as string)
        if(history && history.length > 0){
            console.log({history});
            setAwardHistory(history)
        }
    },[])

    useEffect(()=> {
        if(props.rouletteWinner){
            const allPrizes = [...awardHistory, {prize: props.rouletteWinner.name, transactionHash}]
            if (allPrizes.length > 16){
                allPrizes.splice(0, allPrizes.length - 16)
            }
            localStorage.setItem('allPrizes', JSON.stringify(allPrizes))
            setAwardHistory(allPrizes)
        }
    },[props.rouletteWinner])
    {/* <Center> */}
    return <Card
            marginTop={5}
            backgroundColor="#1A202C"
            borderColor='white'
            borderWidth={1}
            width={350}
            height={450}
        >
            <CardBody>
                <Grid>
                    <Center fontSize={18} justifyContent={'space-between'}>
                        <GridItem>Prize</GridItem>
                        <GridItem>Transactions</GridItem>
                        </Center>
                        <Divider></Divider>
                {
                    awardHistory.length > 0 && awardHistory.slice(0,16).reverse().map((award: PrizeHistory, index: number) => {
                        const shortenedHash: string = award.transactionHash?.slice(0, 6) + "..." + award.transactionHash?.slice(-4);
                        return <Center paddingTop={0.49} display="flex" justifyContent="space-between" key={index}>
                            <GridItem key={props.rouletteWinner?.id}>{prizesName[prizesName.indexOf(award.prize.replace('_', ' '))]}</GridItem>
                            <GridItem><a style={{color: '#0182FF'}} href={`https://explorer.testnet.harmony.one/tx/${award.transactionHash}`} target="_blank" rel="noreferrer">{shortenedHash}</a></GridItem>
                        </Center>
                    })
                }
                </Grid>
            </CardBody>
        </Card>
            {/* </Center> */}
        {/* <div>{error}</div> */}
}
