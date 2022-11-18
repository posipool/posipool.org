import Head from 'next/head'
import Button from '../components/Button'
import Card from '../components/Card'
import Logo from '../components/Logo'
import ParticleBackground from '../components/BackgroundParticles'
import { HomeStyle } from './style'
import { Description } from '../components/Card/style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Posi Pool</title>
        <meta name="description" content="The trust DEFI is in the Posi Pool" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <HomeStyle>
        <Card>
          <Logo />
          <Description>Your financial freedom starts here!</Description>
          <Button href="https://staking.posichain.org/validators/mainnet/0x6a29a4a51B26d35B304190aA716f99C8186d649A">
            Posi Validator
          </Button>
        </Card>
        {/* <Card></Card> */}

        {/*
      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/posipool.svg" alt="Posi Pool" width={80} height={22} />
          </span>
        </a>
      </footer>*/}
      </HomeStyle>
      <ParticleBackground />
    </>
  )
}
