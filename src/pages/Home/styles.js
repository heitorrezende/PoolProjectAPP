import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  background-color: #9ab7c1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled.div`
  z-index: 1;
  width: 100%;
  margin: 15px auto;
  text-align: center;
  color: red;
  font-size: 1.5rem;
`;
