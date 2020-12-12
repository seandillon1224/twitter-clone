import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "styles/theme";
import type {AppProps} from 'next/app'
import ReactDOM from 'react-dom';


/**
* Accessibility tool - outputs to devtools console on dev only and client-side only.
* @see https://github.com/dequelabs/react-axe
*/
if (process.env.NODE_ENV !== 'production' && (typeof window !== 'undefined')) {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000, {});
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
