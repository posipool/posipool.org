import Head from 'next/head'
import Button from '../components/Button'
import Card from '../components/Card'
import Logo from '../components/Logo'
import BackgroundParticle from '../components/BackgroundParticles'
import { Description } from '../components/Card/style'
import Logo2 from '../components/Logo2'

export default function Home() {
  return (
    <>
      <Head>
        <title>Posi Pool</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta property="og:title" content="Posi Pool" />
        <meta property="og:description" content="The official pool of Posi holders" />
        <meta property="og:url" content="https://posipool.org" />
        <meta property="og:image" content="https://posipool.org/posipool-logo-metatags.svg" />
        <meta property="og:type" content="website" />
      </Head>
        <Card>
          <Logo width={60} height={60} style={{ marginTop: 150}}/>
          <Logo2 width={300}/>
          <Description>Maximize your gains with Posi Pool</Description>
            <Button href="https://staking.posichain.org/validators/mainnet/0x6a29a4a51B26d35B304190aA716f99C8186d649A">
              Posi Validator
            </Button>
        </Card> 
        {/*
      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/posipool.svg" alt="Posi Pool" width={80} height={22} />
          </span>
        </a>
      </footer>*/}
      <BackgroundParticle />
    </>
  )
}
