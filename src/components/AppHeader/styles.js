import styled, { keyframes } from "styled-components";
import { BG_COLOR } from "../../styles/AppContainer";

const fadeOut = keyframes`
  0% {
    opacity: 1;
  } 

  50% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
  }
`;

const comeInLeft = keyframes`
  0% {
    opacity: 0;
    left: -50px;
  }

  100% {
    opacity: 1;
    left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  background: ${({ bgUrl }) => (bgUrl ? `url(${bgUrl})` : "transparent")};
  background-repeat: no-repeat;
  background-size: cover;

  .background-overlay {
    background: ${BG_COLOR};
    border-radius: 15px 15px 0 0;
    width: 100%;
    height: 203px;
    z-index: 100;
    position: absolute;
    top: 24px;
    animation: ${fadeOut} 1.5s forwards;
    /* opacity: 1;
    transition: opacity 1s;
    &:hover {
      opacity: 0;
    } */
  }

  .cityName {
    font-size: 40px;
    font-weight: 600;
    padding: 1rem;
    border-radius: 10px;
    color: #fff;
    background: rgba(56, 56, 56, 0.5);
    backdrop-filter: blur(1px);
    padding: 20px;
    border-radius: 10px;
    z-index: 500;
    position: relative;
    animation: ${comeInLeft} 1s forwards;
  }

  @media screen and (min-width: 769px) {
    border-radius: 15px 15px 0 0;
  }

  @media screen and (max-width: 768px) {
    height: 40vh;
    gap: 7vh;

    .background-overlay {
      height: 40vh;
      border-radius: 0;
      top: 0;
    }
  }
`;
