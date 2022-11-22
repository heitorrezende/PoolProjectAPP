export const FETCH_USERS = "FETCH_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    users,
  };
};

export const addUserAnswer = (payload) => {
  return {
    type: ADD_USER_ANSWER,
    payload,
  };
};

export const addUserQuestion = (payload) => {
  return {
    type: ADD_USER_QUESTION,
    payload,
  };
};
