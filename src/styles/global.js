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
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }

  body {
    height: 100%;
  }
`;
