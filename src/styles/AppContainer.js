import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ bgUrl }) => (bgUrl ? `url(${bgUrl})` : "#003")};
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;

  @media screen and (min-width: 768px) {
    border: 5px solid #333;
    border-radius: 20px;
    margin: 25px 0;
    max-width: 80%;
  }
`;
