import { FETCH_QUESTIONS, ADD_QUESTION } from "../actions/questions";
const questions = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    default:
      return state;
  }
};
export default questions;
