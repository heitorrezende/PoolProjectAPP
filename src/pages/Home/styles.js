import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  justify-content: center;
  align-items: center;
`;
export const WelcomeContainer = styled.div`
  background-color: url(vote.svg);
  width: 100%;
  height: 100%;
  color: #9ab7c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Alegreya", serif;

  h2 {
    margin: 3% 15% 1% 0;
    font-size: 5rem;
  }

  h3 {
    font-size: 5rem;
    margin: 0 0% 3% 15%;
  }
`;

export const BackgroundContainer = styled.div`
  width: 50%;
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
