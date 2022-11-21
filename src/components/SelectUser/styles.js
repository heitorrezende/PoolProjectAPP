import styled from "styled-components";

export const SelectUserContainer = styled.div`
  select {
    border-radius: 10px;
    height: 2rem;
    width: 10rem;
  }

  button {
    border-radius: 10px;
    height: 2rem;
    width: 10rem;
    margin: 0 15px;
    background: #727272;
    color: #e1e1e1;
    font-size: 1rem;
    font-weight: 800;
    :disabled {
      opacity: 0.4;
      background: #ffffff;
      color: black;
    }
  }
`;

export const SelectUserTitle = styled.h2`
  font-size: 3.5rem;
  font-family: "Alegreya", serif;
  color: #e1e1e1;
  text-shadow: 2px 2px black;
`;
