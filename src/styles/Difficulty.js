import styled from "styled-components";

export const DifficultyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  button {
    margin: 0 10px;
    border-radius: 20px;
    background-color: #af4c4cff;
    color: white;
  }
  button:hover {
    background-color: #406f42ff;
    cursor: pointer;
  }
    button.active {
    background-color: #8df993ff;
`;
