import styled from "styled-components";

export const FlipCard = styled.li`
  background-color: transparent;
  min-width: 150px;
  min-height: 140px;
  max-height: 170px;
  /* border: 1px solid #f1f1f1; */
  /* perspective: 1000px; */

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
        margin-top: -15px;
      }
      h2 {
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
      }
      h3 {
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
    }
  }
`;
