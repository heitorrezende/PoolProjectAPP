import { SET_LOGGED_USER } from "../actions/loggedUser";
const loggedUser = (state = {}, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return action.id;
    default:
      return state;
  }
};
export default loggedUser;
