import styled from "styled-components";

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

  h2 {
    font-size: 40px;
    font-weight: 400;
  }
`;
