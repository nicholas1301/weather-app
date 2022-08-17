import styled from "styled-components";
import { keyframes } from "styled-components";

const comeInRight = keyframes`
  0% {
    opacity: 0;
    left: 50px;
  }

  50% {
    opacity: 0;
    left: 50px;
  }

  100% {
    opacity: 1;
    left: 0;
  }
`;

export const FlipCardContainer = styled.div`
  background-color: transparent;
  width: 250px;
  min-height: 130px;
  height: 150px;
  /* border: 1px solid #f1f1f1; */
  perspective: 1000px; // Remove this if you don't want the 3D effect
  z-index: 800;
  margin-top: 20px;
  position: relative;
  animation: ${comeInRight} 2s forwards;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .flip-card-front {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;

      background: rgba(56, 56, 56, 0.5);
      backdrop-filter: blur(1px);
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      img {
        margin-top: -25px;
      }

      h2 {
        margin-top: -15px;
      }
    }

    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;

      border-radius: 15px;
      background: rgba(56, 56, 56, 0.5);
      backdrop-filter: blur(1px);
      color: white;
      transform: rotateY(180deg);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      .row {
        width: 90%;
        display: flex;
        justify-content: center;
        gap: 10px;
      }
    }
  }
`;
