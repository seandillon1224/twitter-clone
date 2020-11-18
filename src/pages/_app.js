import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
     height: 100vh;
     width: 100vw;
     background: red;
  }

  #__next {
    height: 100%;
  } 
`



function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle whiteColor />
   <Component {...pageProps} />
   </>
  )
}

export default MyApp
