import { extendTheme, ChakraTheme } from "@chakra-ui/react"

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "dark",
  }
}

export default extendTheme(customTheme)
