import { connect } from "react-redux";

import Question from "../../components/Question";
import * as S from "./styles";
const Dashboard = (props) => {
  const { questions, loggedUser, users } = props;

  const sortedQuestions = questions.sort((a, b) => b.timestamp - a.timestamp);
  const answerdQuestions = sortedQuestions.filter((question) => {
    return question?.id in users[loggedUser].answers;
  });

  const unansweredQuestions = sortedQuestions.filter((question) => {
    return !(question?.id in users[loggedUser].answers);
  });

  return (
    <S.QuestionPage>
      <h2>New Questions</h2>
      <S.QuestionContainer>
        {unansweredQuestions.length ? (
          unansweredQuestions.map((question) => {
            return <Question key={question.id} question={question} />;
          })
        ) : (
          <h3>No New Questions</h3>
        )}
      </S.QuestionContainer>

      <h2>Answerd Questions</h2>
      <S.QuestionContainer>
        {!!answerdQuestions ? (
          answerdQuestions.map((question) => {
            return <Question key={question.id} question={question} />;
          })
        ) : (
          <h3>No Answerd Questions</h3>
        )}
      </S.QuestionContainer>
    </S.QuestionPage>
  );
};

const mapStateToProps = ({ questions, loggedUser, users }) => {
  return {
    questions: questions ? Object.values(questions) : null,
    loggedUser,
    users,
  };
};
export default connect(mapStateToProps)(Dashboard);
