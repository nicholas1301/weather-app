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

interface IContainerProps {
  bgUrl: string | null;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  background: ${({ bgUrl }: IContainerProps) =>
    bgUrl ? `url(${bgUrl})` : "transparent"};
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 850;

  .background-overlay {
    background: ${BG_COLOR};
    border-radius: 15px 15px 0 0;
    width: 100%;
    height: 233px;
    z-index: 900;
    position: absolute;
    top: calc((100vh - 646px) / 2 + 3px);
    animation: ${fadeOut} 1.5s forwards;
    /* opacity: 1;
    transition: opacity 1s;
    &:hover {
      opacity: 0;
    } */
  }

  .header-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    z-index: 950;
    position: relative;
    animation: ${comeInLeft} 1s forwards;
  }

  @media screen and (min-width: 769px) {
    border-radius: 15px 15px 0 0;
  }

  @media screen and (max-width: 768px) {
    height: 35vh;

    .background-overlay {
      height: 36vh;
      border-radius: 0;
      top: 0;
    }
  }

  @media screen and (max-height: 600px) {
    /* height: 30vh; */
  }
`;
