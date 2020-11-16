// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    fontFamily: {
        body: string
        condensed: string
    }
    colors: {
      blue: string
      black: string
      darkGray: string
      lightGray: string
      lighterGray: string
      lightestGray: string
    }
  }
}