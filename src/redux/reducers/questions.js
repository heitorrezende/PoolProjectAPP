import {
  FETCH_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER,
} from "../actions/questions";
const questions = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    case ADD_ANSWER:
      return {
        ...state,
        [action.answer.qid]: {
          ...state[action.answer.qid],
          [action.answer.answer]: {
            ...state[action.answer.qid][action.answer.answer],
            votes: state[action.answer.qid][action.answer.answer].votes.concat(
              action.answer.loggedUser
            ),
          },
        },
      };
    default:
      return state;
  }
};
export default questions;
