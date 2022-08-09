import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 20px;

  .sub-container {
    display: flex;
    align-items: center;
    input {
      width: 300px;
      padding: 0.7rem 80px 0.7rem 1.3rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
    }

    .spinner {
      margin-left: -40px;
    }
  }

  .dropdown-menu {
    background-color: white;
    color: black;
    width: 300px;
    max-height: 300px;
    overflow-y: auto;
    position: absolute;

    .city-option {
      padding: 0.5rem 1rem;
      cursor: pointer;

      &:hover {
        background-color: #ddd;
      }
    }
  }
`;
