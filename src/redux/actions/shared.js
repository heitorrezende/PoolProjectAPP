import { getInitialData } from "../../utils/api";
import { fetchQuestions } from "./questions";
import { fetchUsers } from "./users";

export const FETCH_INITIAL_DATA = "FETCH_INITIAL_DATA";

export const handleFetchInitialData = () => {
  return (dispatch) => {
    getInitialData().then((resp) => {
      dispatch(fetchQuestions(resp.questions));
      dispatch(fetchUsers(resp.users));
    });
  };
};
