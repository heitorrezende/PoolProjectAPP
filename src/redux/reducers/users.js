import {
  ADD_USER_ANSWER,
  FETCH_USERS,
  ADD_USER_QUESTION,
} from "../actions/users";
const users = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.payload.loggedUser]: {
          ...state[action.payload.loggedUser],
          answers: {
            ...state[action.payload.loggedUser].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: state[action.payload.author].questions.concat(
            action.payload.id
          ),
        },
      };
    default:
      return state;
  }
};

export default users;
