import styled from "styled-components";

export const NewQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const NewQuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;

  input {
    width: 100%;
    min-height: 2rem;
    border: 2px solid #dbdbdb;
    color: black;
  }

  button {
    width: 20%;
    margin: 10px 20px;
    border-radius: 5px;
    background: #63b2ac;
    border: none;
    :hover {
      cursor: pointer;
    }
    :disabled {
      opacity: 0.4;
      background: #f1f2f2;
      color: #b9b9b9;
    }
    min-height: 2rem;
  }
`;

export const ReturnButton = styled.button`
  width: 300px;
  min-height: 2rem;
  &:hover {
    background-color: #dbdbdb;
  }
  margin: 50px 20px;
  border-radius: 5px;
  background: #ffffff;
  border: 2px solid #dbdbdb;
  font-size: 1rem;
`;
