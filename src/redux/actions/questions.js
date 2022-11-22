import { saveQuestion, saveQuestionAnswer } from "../../utils/api";
import { addUserAnswer, addUserQuestion } from "./users";
import { toast } from "react-toastify";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

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
      dispatch(addUserQuestion(question));
      toast.success("Question added successfully");
    });
  };
};

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const handleAddAnswer = (answer) => {
  return (dispatch) => {
    return saveQuestionAnswer(answer).then(() => {
      dispatch(addAnswer(answer));
      dispatch(addUserAnswer(answer));
    });
  };
};
