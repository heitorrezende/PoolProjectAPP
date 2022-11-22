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
