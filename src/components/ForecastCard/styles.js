import styled from "styled-components";
import { css } from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
  margin-bottom: 10px;
  padding: 10px 0;
  border-radius: 10px;
  background: rgba(56, 56, 56, 0.5);
  backdrop-filter: blur(1px);

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      background: #555;
      backdrop-filter: blur(1px);
    `}

  h2 {
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 5px;
  }

  @media screen and (max-height: 750px) {
    h2 {
      margin-bottom: 0;
    }

    img {
      margin-top: -15px;
    }

    h3 {
      margin-top: -15px;
    }
  }
`;
