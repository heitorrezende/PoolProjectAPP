import { formatDate } from "../../utils/_DATA";
import * as S from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

const Pool = ({ question }) => {
  const navigate = useNavigate();
  let location = useLocation();
  const handleClick = (e) => {
    e.preventDefault();
    return navigate(`/questions/${question.id}`, {
      state: { from: location },
    });
  };
  return (
    <S.QuestionContainer>
      <h2>Poll by {question.author}</h2>
      <h2>{formatDate(question.timestamp)}</h2>
      <S.ShowButton onClick={handleClick}>Show</S.ShowButton>
    </S.QuestionContainer>
  );
};

export default Pool;
