import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #e7e9eb;
  margin-bottom: 1vh;

  ul {
    width: 100vw;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    text-decoration: none;

    color: black;
  }

  li {
    margin: 0 2rem;
  }

  a {
    text-decoration: none;
    color: #9ab7c1;
    weight: 700;
  }
`;

export const loggedUser = styled.span`
  text-decoration: none;
  weight: 700;
  margin-right: 4%;
  display: flex;
  button {
    margin: 0 1rem;
    background: none;
    border: 2px solid #9ab7c1;
    color: #9ab7c1;
    border-radius: 5px;
  }
`;
