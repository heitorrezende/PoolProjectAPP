import { useState } from "react";
import { connect } from "react-redux";
import { addQuestion, handleAddQuestion } from "../../redux/actions/questions";
import { saveQuestion } from "../../utils/api";

import * as S from "./styles";

const NewQuestion = (props) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const { loggedUser, dispatch } = props;
  console.log(props, "props");
  const question = {
    optionOneText: optionOne,
    optionTwoText: optionTwo,
    author: loggedUser,
  };

  console.log(question, "question");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // dispatch(addQuestion(newQuestion));
    dispatch(handleAddQuestion(question));
  };
  const enableSubmit = optionOne && optionTwo;

  return (
    <S.NewQuestionContainer>
      <h2>Would you Rather</h2>
      <h3>Create your own pool</h3>
      <S.NewQuestionForm onSubmit={handleSubmit}>
        <label>option 1</label>
        <input
          value={optionOne}
          type="text"
          placeholder="Option One"
          onChange={(e) => setOptionOne(e.target.value)}
        />
        <label>option 2</label>{" "}
        <input
          value={optionTwo}
          type="text"
          placeholder="Option Two"
          onChange={(e) => setOptionTwo(e.target.value)}
        />
        <button type="submit" disabled={!enableSubmit}>
          Submit
        </button>
      </S.NewQuestionForm>{" "}
    </S.NewQuestionContainer>
  );
};

const mapStateToProps = ({ loggedUser }) => {
  return {
    loggedUser,
  };
};
export default connect(mapStateToProps)(NewQuestion);
