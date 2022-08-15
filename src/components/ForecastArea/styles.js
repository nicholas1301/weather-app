import styled from "styled-components";
import { keyframes } from "styled-components";

const dropDown = keyframes`
  0% {
    height: 0;
  }

  70% {
    height: 0;
  }

  100% {
    height: 200px;
  }
`;

export const Container = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  width: 95%;
  max-width: 700px;
  overflow-x: auto;
  overflow-y: hidden;

  animation: ${dropDown} 3s forwards;

  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #333;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }
`;
