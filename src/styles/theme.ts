import { extendTheme, ChakraTheme } from '@chakra-ui/react'

const customTheme: Partial<ChakraTheme> = {
  styles: {
    global: {
      'html, body': {
        bgGradient: 'linear(to-t, blue.900, gray.900)',
        height: '100%',
        width: '100%',
        overflowY: 'auto',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
  },
}

export default extendTheme(customTheme)
