import { useContractEvents, useContract } from "@thirdweb-dev/react";
import { Card,CardHeader , CardBody, CardFooter, Center, Grid, GridItem } from '@chakra-ui/react'

export default function RouletteWinners(){
    const contractAddress = '0x9F72BFC848179f2b0a02048031F494ee4cEC7674'
    const { contract } = useContract(contractAddress);
    const { data, isLoading, error } = useContractEvents(contract, "RewardLog");
    // console.log({data: data?.length && data[0].data, isLoading, error});
    console.log({data});
    
    {/* <Center> */}
    return <Card
            marginTop={5}
            // backgroundColor="#1A202C"
            // borderColor='white'
            // borderWidth={1}
            width={350}
            height={350}
        >
            <CardBody>
                <Grid>
                <div style={{fontSize: 18}}>All Results:</div>
                {
                    data?.slice(0,12).map((event: any, index: number) => {
                        const prizeIndex = event.data.prize.name
                        const address = event.data.player
                        const shortenedAddress: string = address.slice(0, 6) + "..." + address.slice(-4);
                        return <Center display="flex" justifyContent="space-between" key={index}>
                            <GridItem key={index + prizeIndex }>{event.data.prize.name}</GridItem>
                            <GridItem>{shortenedAddress}</GridItem>
                        </Center>
                    })
                }
                </Grid>
            </CardBody>
        </Card>
            {/* </Center> */}
        {/* <div>{error}</div> */}
}
