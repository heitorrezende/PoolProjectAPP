import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Alegreya", serif;
  color: #0f2b3d;
  font-weight: 800;
  width: fit-content;
  h2 {
    margin: 10px 20px;
  }
`;

export const ShowButton = styled.button`
  width: 250px;
  min-height: 2rem;
  &:hover {
    background: #63b2ac;
    color: #ffffff;
    border: 2px solid #ffffff;
  }
  color: #6db95d;
  margin: 10px 20px;
  border-radius: 5px;
  background: #ffffff;
  border: 2px solid #6db95d;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
