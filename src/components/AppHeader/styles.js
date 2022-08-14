import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ bgUrl }) => (bgUrl ? `url(${bgUrl})` : "transparent")};
  background-repeat: no-repeat;
  background-size: cover;

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

  @media screen and (min-width: 768px) {
    border-radius: 15px 15px 0 0;
  }
`;
