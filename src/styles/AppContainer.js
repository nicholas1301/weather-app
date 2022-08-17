import styled from "styled-components";

export const BG_COLOR = "#1f1f1f";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 646px;
  width: 100%;

  @media screen and (min-width: 769px) {
    border-radius: 20px;
    margin: 25px 0;
    width: 80%;
    max-width: 1000px;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
