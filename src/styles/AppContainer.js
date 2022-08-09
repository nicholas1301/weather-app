import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ bgUrl }) => (bgUrl ? `url(${bgUrl})` : "#224")};
  background-repeat: no-repeat;
  background-size: contain;

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
    margin-bottom: 30px;
  }
`;
