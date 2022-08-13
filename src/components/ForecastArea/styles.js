import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  width: 95%;
  max-width: 700px;
  overflow-x: auto;

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
