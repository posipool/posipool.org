import { ColorModeScript } from '@chakra-ui/react'
import Document, { DocumentContext,  Head, Html, Main, NextScript } from 'next/document'
import theme from '../styles/theme'

export default class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx)
  }

  render () {
    return (
        <Html>
            <Head>
                
            </Head>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}