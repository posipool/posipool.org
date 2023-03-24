import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from "@chakra-ui/react"

export default extendTheme({
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      900: "#1a202c",
      800: "#2d3748",
      700: "#4a5568",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
})
