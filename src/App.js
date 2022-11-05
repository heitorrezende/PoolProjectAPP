import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { _getQuestions, _getUsers } from "./_DATA";
import { fetchUsers } from "./redux/actions/users";
import { fetchQuestions } from "./redux/actions/questions";
const App = (props) => {
  useEffect(() => {
    _getUsers()
      .then((users) => props.dispatch(fetchUsers(users)))
      .catch((e) => console.warn("There was an error", e));

    _getQuestions()
      .then((questions) => props.dispatch(fetchQuestions(questions)))
      .catch((e) => console.warn("there was an error", e));
  }, []);

  console.log(props, "props");
  return <div className="App">Loaded</div>;
};

const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps)(App);
