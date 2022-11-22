import { connect } from "react-redux";

const Leaderboard = (props) => {
  const sortedUsers = props.users.sort((a, b) => {
    return (
      b.questions.length +
      Object.keys(b.answers)?.length -
      (a.questions.length + Object.keys(a.answers)?.length)
    );
  });

  return (
    <>
      <h1>Leaderboard</h1>
      {sortedUsers.map((user) => {
        return (
          <div>
            <div>
              {user.name} - {user.id}
            </div>
            <div>questions : {user.questions.length}</div>
            <div>Answers {Object.keys(user.answers)?.length}</div>
          </div>
        );
      })}
    </>
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
