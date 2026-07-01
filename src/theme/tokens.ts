export const colors = {
  graphite: {
    50: { value: "#E6EAF2" },
    100: { value: "#C9D1DD" },
    200: { value: "#9EAABA" },
    300: { value: "#758396" },
    400: { value: "#4F5B6B" },
    500: { value: "#2C3542" },
    600: { value: "#1F2733" },
    700: { value: "#171D26" },
    800: { value: "#12161D" },
    850: { value: "#0F141B" },
    900: { value: "#0B0F14" },
    950: { value: "#070A0E" },
  },

  cyan: {
    50: { value: "#E6FBFD" },
    100: { value: "#BFF4F9" },
    200: { value: "#8AECF4" },
    300: { value: "#4DDDEC" },
    400: { value: "#18CEE1" },
    500: { value: "#00C2D6" },
    600: { value: "#009CAE" },
    700: { value: "#087988" },
    800: { value: "#0C5864" },
    900: { value: "#0B3E47" },
    950: { value: "#06272D" },
  },

  amber: {
    50: { value: "#FFF7E6" },
    100: { value: "#FFE9B8" },
    200: { value: "#FFD980" },
    300: { value: "#FFC74D" },
    400: { value: "#FFB92A" },
    500: { value: "#FFB020" },
    600: { value: "#DB8F00" },
    700: { value: "#A96D00" },
    800: { value: "#754B00" },
    900: { value: "#4A3000" },
    950: { value: "#2B1C00" },
  },

  success: {
    50: { value: "#E9FFF4" },
    100: { value: "#C8FFE3" },
    200: { value: "#98FBC9" },
    300: { value: "#5DF0A8" },
    400: { value: "#2CDC88" },
    500: { value: "#16C172" },
    600: { value: "#0E9B5A" },
    700: { value: "#0B7647" },
    800: { value: "#095E3A" },
    900: { value: "#07472D" },
    950: { value: "#03291A" },
  },
} as const

export const semanticColors = {
  bg: {
    DEFAULT: { value: "{colors.graphite.900}" },
    canvas: { value: "{colors.graphite.950}" },
    subtle: { value: "{colors.graphite.800}" },
    muted: { value: "{colors.graphite.700}" },
    elevated: { value: "{colors.graphite.800}" },
    overlay: { value: "rgba(7, 10, 14, 0.82)" },
    section: { value: "{colors.graphite.900}" },
    sectionAlt: { value: "{colors.graphite.850}" },
    sectionDeep: { value: "{colors.graphite.950}" },
    card: { value: "rgba(18, 22, 29, 0.92)" },
    cardStrong: { value: "rgba(12, 17, 24, 0.96)" },
    header: { value: "rgba(11, 15, 20, 0.82)" },
    heroGlow: {
      value: "radial-gradient(circle at 70% 35%, rgba(0, 194, 214, 0.12), transparent 42%)",
    },
  },

  fg: {
    DEFAULT: { value: "{colors.graphite.50}" },
    muted: { value: "#AEB7C6" },
    subtle: { value: "#7E8A9B" },
    faint: { value: "#657184" },
    inverted: { value: "{colors.graphite.950}" },
  },

  border: {
    DEFAULT: { value: "{colors.graphite.600}" },
    muted: { value: "rgba(230, 234, 242, 0.08)" },
    subtle: { value: "rgba(230, 234, 242, 0.06)" },
    emphasized: { value: "rgba(0, 194, 214, 0.42)" },
    brandHover: { value: "rgba(0, 194, 214, 0.52)" },
    brandSoft: { value: "rgba(0, 194, 214, 0.20)" },
    brandIcon: { value: "rgba(0, 194, 214, 0.24)" },
  },

  brand: {
    solid: { value: "{colors.cyan.500}" },
    contrast: { value: "{colors.graphite.950}" },
    fg: { value: "{colors.cyan.300}" },
    muted: { value: "rgba(0, 194, 214, 0.16)" },
    subtle: { value: "rgba(0, 194, 214, 0.08)" },
    emphasized: { value: "rgba(0, 194, 214, 0.28)" },
    badge: { value: "rgba(0, 194, 214, 0.10)" },
    focusRing: { value: "{colors.cyan.400}" },
  },

  cta: {
    solid: { value: "{colors.amber.500}" },
    contrast: { value: "{colors.graphite.950}" },
    fg: { value: "{colors.amber.300}" },
    muted: { value: "rgba(255, 176, 32, 0.18)" },
    subtle: { value: "rgba(255, 176, 32, 0.09)" },
    emphasized: { value: "rgba(255, 176, 32, 0.30)" },
    hover: { value: "{colors.amber.300}" },
    focusRing: { value: "{colors.amber.400}" },
  },

  positive: {
    solid: { value: "{colors.success.500}" },
    contrast: { value: "{colors.graphite.950}" },
    fg: { value: "{colors.success.300}" },
    muted: { value: "rgba(22, 193, 114, 0.16)" },
    subtle: { value: "rgba(22, 193, 114, 0.08)" },
    emphasized: { value: "rgba(22, 193, 114, 0.26)" },
    focusRing: { value: "{colors.success.400}" },
  },
} as const

export const fonts = {
  heading: {
    value:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  body: {
    value:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  mono: {
    value:
      "'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
  },
} as const

export const radii = {
  xs: { value: "0.375rem" },
  sm: { value: "0.5rem" },
  md: { value: "0.75rem" },
  lg: { value: "1rem" },
  xl: { value: "1.25rem" },
  "2xl": { value: "1.5rem" },
  full: { value: "9999px" },
} as const

export const shadows = {
  glowCyan: {
    value: "0 0 32px rgba(0, 194, 214, 0.26)",
  },
  glowAmber: {
    value: "0 0 32px rgba(255, 176, 32, 0.24)",
  },
  card: {
    value:
      "0 18px 48px rgba(0, 0, 0, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
  },
  elevated: {
    value:
      "0 24px 64px rgba(0, 0, 0, 0.46), 0 0 0 1px rgba(230, 234, 242, 0.06)",
  },
} as const
