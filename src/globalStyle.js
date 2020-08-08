import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }

  body {
    background: #f0f0f0;
    padding: unset;
    margin: unset;
  }


  #app {
    background: #f0f0f0;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;