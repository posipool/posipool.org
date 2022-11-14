import Image from "next/image"
import styled from "styled-components"
import styles from "../../styles/Home.module.css"

const Brand = styled.img``

export default function Logo() {
  return (
    // <span className={styles.logo}>
    <main className={styles.logo}>
      <Image
        src="/posipool.svg"
        alt="Posi Pool Logo"
        width={465.65}
        height={118.65}
      ></Image>
    </main>
    // </span>
  )
}
