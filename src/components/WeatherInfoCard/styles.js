import styled from "styled-components";
import { keyframes } from "styled-components";

const comeInRight = keyframes`
  0% {
    opacity: 0;
    right: -50px;
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

export const Container = styled.div`
  background: rgba(56, 56, 56, 0.5);
  backdrop-filter: blur(1px);
  margin-top: 20px;
  padding: 0 20px 20px;
  border-radius: 10px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: ${comeInRight} 2s forwards;
  z-index: 100;

  h2 {
    font-size: 40px;
    font-weight: 400;
  }
`;
