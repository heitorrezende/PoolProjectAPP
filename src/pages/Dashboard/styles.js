import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 2px solid black;
  width: 90%;
  min-height: 30vh;

  h3 {
    width: 100%;
    font-size: 3.5rem;
    color: #cecece;
    align-self: center;
    justify-self: center;
    text-align: center;
  }
`;

export const QuestionPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
