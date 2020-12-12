// my-theme.ts
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: '5px',
  fontFamily: {
    body: 'Roboto, Arial, sans-serif',
    condensed: 'Roboto Condensed, Arial, sans-serif',
  },
  colors: {
    white: "#FFFFFF",
    blue: "#1DA1F2",
    black: "#14171A",
    darkGray: "#657786",
    lightGray: "#AAB8C2",
    lighterGray: "#E1E8ED",
    lightestGray: "#F5F8FA",
  },
}

export { theme }