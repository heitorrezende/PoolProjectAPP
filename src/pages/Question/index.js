import * as S from "./styles";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddAnswer } from "../../redux/actions/questions";

import ReturnToDashboard from "../../components/ReturnButton";

const Question = (props) => {
  let { question_id } = useParams();

  const currentQuestion = props.questions[question_id];
  const { loggedUser } = props;
  const userHasVoted1 = currentQuestion.optionOne.votes.includes(loggedUser);
  const userHasVoted2 = currentQuestion.optionTwo.votes.includes(loggedUser);

  let isAnswered = userHasVoted1 || userHasVoted2 || false;

  const totalVotesOption1 = currentQuestion.optionOne.votes.length;
  const totalVotesOption2 = currentQuestion.optionTwo.votes.length;

  const handleVotes =
    Math.round(
      (totalVotesOption1 / (totalVotesOption1 + totalVotesOption2)) * 1000
    ) / 10;

  const handleClick = (vote, loggedUser, e) => {
    e.preventDefault();

    const answer = { loggedUser, qid: question_id, answer: vote };

    props.dispatch(handleAddAnswer(answer));
  };

  return (
    <S.QuestionContainer>
      <h1>Poll by {currentQuestion.author}</h1>
      <h2>Would you rather</h2>
      <img
        src={props.users[currentQuestion.author].avatarURL}
        alt="User avatar"
        width="300px"
        height="300px"
      />
      <S.ButtonContainer>
        {isAnswered ? (
          <>
            <S.VoteContainer>
              <S.QuestionButton
                hasVoted1={userHasVoted1}
                disabled={isAnswered}
                isAnswered={isAnswered}
              >
                {currentQuestion.optionOne.text}
              </S.QuestionButton>
              {handleVotes} % ({totalVotesOption1} vote
              {totalVotesOption1 > 1 && "s"})
            </S.VoteContainer>
            <S.VoteContainer>
              <S.QuestionButton
                hasVoted2={userHasVoted2}
                disabled={isAnswered}
                isAnswered={isAnswered}
              >
                {currentQuestion.optionTwo.text}
              </S.QuestionButton>
              {100 - handleVotes}% ({totalVotesOption2} vote
              {totalVotesOption2 > 1 && "s"})
            </S.VoteContainer>
          </>
        ) : (
          <>
            <S.QuestionButton
              isAnswered={isAnswered}
              onClick={(e) => handleClick("optionOne", loggedUser, e)}
            >
              {currentQuestion.optionOne.text}
            </S.QuestionButton>
            <S.QuestionButton
              isAnswered={isAnswered}
              onClick={(e) => handleClick("optionTwo", loggedUser, e)}
            >
              {currentQuestion.optionTwo.text}
            </S.QuestionButton>
          </>
        )}
      </S.ButtonContainer>

      <ReturnToDashboard />
    </S.QuestionContainer>
  );
};

const mapStateToProps = ({ questions, loggedUser, users }) => {
  return {
    questions,
    loggedUser,
    users,
  };
};
export default connect(mapStateToProps)(Question);
