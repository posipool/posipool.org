import Image from 'next/image'
import styled from 'styled-components'
import styles from '../../styles/Home.module.css'

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Logo() {
  return (
    <LogoContainer>
      <Image src={'/posipool-logo-oficial.svg'} alt="Posi brand" width={65} height={65} />
      <Image src="/posipool.svg" alt="Posi Pool Logo" width={300} height={100} className={styles.image}></Image>
    </LogoContainer>
  )
}
