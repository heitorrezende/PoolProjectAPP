import styled from "styled-components";

export const LeaderboardContainer = styled.div`
  h1 {
    font-family: "Alegreya", serif;
    color: #0f2b3d;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  border: 1px solid #dbdbdb;
  margin: 20px auto;
`;

export const LeaderboardCard = styled.div`
  display: flex;
  border: 1px solid #dbdbdb;
  justify-content: space-around;
  width: 100%;
  background-color: ${({ loggedUser, currentUser }) =>
    loggedUser === currentUser && !!currentUser && "#63b2ac"};

  span {
    width: 33%;
    text-align: center;
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

export const LeaderBoardPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
