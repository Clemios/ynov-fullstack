import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1536px",    
      xxxl: "1920px",
    },
    tokens: {
      colors: {
        red: {
            base: "#D46A6A",
            light: "#AA3939",
            dark: "#550000",
        },
        primary: "#ff00ff",
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.primary}" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },

})

export const system = createSystem(defaultConfig, config)