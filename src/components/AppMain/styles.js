import styled, { keyframes } from "styled-components";
import { BG_COLOR } from "../../styles/AppContainer";
import d01d from "../../assets/01d-desktop.jpg";
import n01d from "../../assets/01n-desktop.jpg";
import d02d from "../../assets/02d-desktop.jpg";
import n02d from "../../assets/02n-desktop.jpg";
import d03d from "../../assets/03d-desktop.jpg";
import n03d from "../../assets/03n-desktop.jpg";
import d04d from "../../assets/04d-desktop.jpg";
import n04d from "../../assets/04n-desktop.jpg";
import d09d from "../../assets/09d-desktop.jpg";
import n09d from "../../assets/09n-desktop.jpg";
import d10d from "../../assets/10d-desktop.jpg";
import n10d from "../../assets/10n-desktop.jpg";
import d11d from "../../assets/11d-desktop.jpg";
import n11d from "../../assets/11n-desktop.jpg";
import d13d from "../../assets/13d-desktop.jpg";
import n13d from "../../assets/13n-desktop.jpg";
import d50d from "../../assets/50d-desktop.jpg";
import n50d from "../../assets/50n-desktop.jpg";

const bgImages = {
  "01d": d01d,
  "01n": n01d,
  "02d": d02d,
  "02n": n02d,
  "03d": d03d,
  "03n": n03d,
  "04d": d04d,
  "04n": n04d,
  "09d": d09d,
  "09n": n09d,
  "10d": d10d,
  "10n": n10d,
  "11d": d11d,
  "11n": n11d,
  "13d": d13d,
  "13n": n13d,
  "50d": d50d,
  "50n": n50d,
};

const fadeOut = keyframes`
  0% {
    opacity: 1;
  } 

  70% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: ${({ weatherIconCode }) =>
    "url(" + bgImages[weatherIconCode] + ")"};
  background-repeat: no-repeat;
  background-size: cover; //contain

  .background-overlay {
    background: ${BG_COLOR};
    border-radius: 0 0 15px 15px;
    width: 100%;
    height: 410px;
    z-index: 50;
    position: absolute;
    animation: ${fadeOut} 5s forwards;
    /* opacity: 1;
    transition: opacity 1s;
    &:hover {
      opacity: 0;
    } */
  }
  @media screen and (min-width: 769px) {
    border-radius: ${({ cityHasImages }) =>
      cityHasImages ? "0 0 15px 15px" : "15px"};

    .background-overlay {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 768px) {
    height: 65vh;
    /* gap: 7vh; */
    .background-overlay {
      height: 65vh;
      border-radius: 0;
    }
  }
`;
