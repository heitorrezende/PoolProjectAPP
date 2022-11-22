import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
