import { Center, Grid, GridItem, Heading, Flex } from '@chakra-ui/react'
import ClainTicketCard from '../ClainTicketCard'

export default function Header(props: HeaderProps) {
  return (
    <>
      <Grid
        marginTop={10}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={{ base: '1rem', md: '2rem' }}
        autoFlow={{ base: 'row', md: 'row', lg: 'column' }}
        justifyContent={'space-evenly'}
        px={{ base: '1rem', md: '2rem' }}
        py={{ base: '1rem', md: '2rem' }}
      >
        <GridItem colSpan={{ base: 1, md: 1, lg: 1 }} order={{ base: 1, md: 2, lg: 1 }}>
          <Flex justifyContent="flex-start" flexDirection="column">
            <Heading style={{ width: 350 }} height={14} size="2xl">
              <Center>{props.title}</Center>
            </Heading>
            <Center style={{ width: 350 }}>{props.subtitle}</Center>
          </Flex>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1, lg: 2 }} order={{ base: 2, md: 1, lg: 1 }}>
          <Flex justifyContent="flex-end">
            <ClainTicketCard></ClainTicketCard>
          </Flex>
        </GridItem>
      </Grid>
    </>
  )
}
