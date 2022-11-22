import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Alegreya", serif;
  color: #0f2b3d;
  font-weight: 800;
`;

export const QuestionButton = styled.button`
  width: 90%;
  min-height: 2rem;
  &:hover {
    background-color: ${({ isAnswered }) => (isAnswered ? "none" : "#63b2ac")};
  }
  margin: 10px 20px;
  border-radius: 5px;
  background: #ffffff;
  background-color: ${({ hasVoted1, hasVoted2 }) =>
    hasVoted1 || hasVoted2 ? "#63b2ac" : "#ffffff"};
  border: 2px solid #dbdbdb;
  :disabled {
    color: black;
  }
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VoteContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
