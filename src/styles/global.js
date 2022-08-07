import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    min-height: 100vh;
    background-color: black;
    color: white;
  }

  body {
    height: 100%;
  }
`;
