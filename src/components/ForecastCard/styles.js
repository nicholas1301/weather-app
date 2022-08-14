import styled from "styled-components";
import { css } from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
  margin-bottom: 15px;
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
  }
`;
