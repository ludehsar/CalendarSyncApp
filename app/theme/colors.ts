// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#fafaf9",
  neutral200: "#f5f5f3",
  neutral300: "#eff0ed",
  neutral400: "#eaebe7",
  neutral500: "#e5e6e1",
  neutral600: "#b7b8b4",
  neutral700: "#898a87",
  neutral800: "#5c5c5a",
  neutral900: "#2e2e2d",

  primary100: "#ccdeea",
  primary200: "#99bdd5",
  primary300: "#669dc0",
  primary400: "#337cab",
  primary500: "#005b96",
  primary600: "#004978",

  secondary100: "#dae8ff",
  secondary200: "#b4d0ff",
  secondary300: "#8fb9ff",
  secondary400: "#69a1ff",
  secondary500: "#448aff",

  accent100: "#fae8f2",
  accent200: "#f5d1e5",
  accent300: "#f0b9d8",
  accent400: "#eba2cb",
  accent500: "#e68bbe",

  angry100: "#F2D6CD",
  angry500: "#FF6D6D",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral900,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral500,
  /**
   * The default border color.
   */
  border: palette.neutral600,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral600,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
