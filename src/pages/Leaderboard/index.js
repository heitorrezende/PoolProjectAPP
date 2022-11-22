import { connect } from "react-redux";
import * as S from "./styles";

import ReturnToDashboard from "../../components/ReturnButton";

const Leaderboard = (props) => {
  const sortedUsers = props.users.sort((a, b) => {
    return (
      b.questions.length +
      Object.keys(b.answers)?.length -
      (a.questions.length + Object.keys(a.answers)?.length)
    );
  });

  return (
    <S.LeaderBoardPage>
      <S.LeaderboardContainer>
        <h1>Leaderboard</h1>
        <S.LeaderboardCard>
          <span>Name </span>
          <span>Questions</span>
          <span>Answers</span>
        </S.LeaderboardCard>
        {sortedUsers.map((user) => {
          return (
            <S.LeaderboardCard
              loggedUser={props.loggedUser}
              currentUser={user.id}
            >
              <span>
                {user.name} - {user.id}{" "}
                <img
                  src={user.avatarURL}
                  alt="user Avatar"
                  width="40px"
                  height="40px"
                />
              </span>
              <span>{user.questions.length}</span>
              <span>{Object.keys(user.answers)?.length}</span>
            </S.LeaderboardCard>
          );
        })}
      </S.LeaderboardContainer>

      <ReturnToDashboard />
    </S.LeaderBoardPage>
  );
};

const mapStateToProps = ({ questions, loggedUser, users }) => {
  return {
    questions,
    loggedUser,
    users: users ? Object.values(users) : null,
  };
};
export default connect(mapStateToProps)(Leaderboard);
