import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    min-height: 100vh;
    background-color: #1f1f1f;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }

  body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
