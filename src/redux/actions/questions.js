import { saveQuestion } from "../../utils/api";

export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const fetchQuestions = (questions) => {
  return { type: FETCH_QUESTIONS, questions };
};

export const addQuestion = (question) => {
  return { type: ADD_QUESTION, question };
};

export const handleAddQuestion = (question) => {
  return (dispatch) => {
    return saveQuestion(question).then((question) => {
      dispatch(addQuestion(question));
    });
  };
};
