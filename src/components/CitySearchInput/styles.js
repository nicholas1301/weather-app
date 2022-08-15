import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 20px;
  width: 90%;
  max-width: 400px;
  z-index: 999;

  .sub-container {
    display: flex;
    align-items: center;
    input {
      width: 90%;
      padding: 0.7rem 50px 0.7rem 1.3rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
    }

    .spinner {
      margin-left: -50px;
    }
  }

  .dropdown-menu {
    background-color: white;
    color: black;
    width: 80%;
    max-width: 360px;

    max-height: 300px;
    overflow-y: auto;
    position: absolute;
    z-index: 1000;

    .city-option {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        background-color: #ddd;
      }
    }
  }
`;
