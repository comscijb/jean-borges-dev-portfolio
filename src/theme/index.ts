import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

import {
  colors,
  fonts,
  radii,
  semanticColors,
  shadows,
} from "./tokens"

const config = defineConfig({
  cssVarsPrefix: "portfolio",

  globalCss: {
    "html, body": {
      margin: "0",
      padding: "0",
      minHeight: "100%",
      bg: "bg.canvas",
      color: "fg",
      fontFamily: "body",
      textRendering: "geometricPrecision",
    },

    body: {
      bg: "bg.canvas",
    },

    "::selection": {
      bg: "brand.muted",
      color: "fg",
    },

    "a, button": {
      WebkitTapHighlightColor: "transparent",
    },

    "*": {
      borderColor: "border",
    },
  },

  theme: {
    tokens: {
      colors,
      fonts,
      radii,
      shadows,
    },

    semanticTokens: {
      colors: semanticColors,
    },
  },
})

export const system = createSystem(defaultConfig, config)
