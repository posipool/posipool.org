import Head from "next/head"
import Image from "next/image"
import Button from "../components/Button"
import Logo from "../components/Logo"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posi Pool</title>
        <meta name="description" content="The trust DEFI is in the Posi Pool" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Logo />
        <p className={styles.description}>Your financial freedom starts here</p>
        <Button
          as="a"
          href="https://staking.posichain.org/validators/mainnet/0x6a29a4a51B26d35B304190aA716f99C8186d649A"
          // target="_blank"
          // rel="noopener"
        >
          Delegate
        </Button>
      </main>
      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/posipool.svg" alt="Posi Pool" width={80} height={22} />
          </span>
        </a>
      </footer>
    </div>
  )
}
