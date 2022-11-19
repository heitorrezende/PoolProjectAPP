import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import SelectUser from "./components/SelectUser";
import { handleFetchInitialData } from "./redux/actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleFetchInitialData());
  }, []);

  return (
    <div className="App">
      <SelectUser />
    </div>
  );
};

const mapStateToProps = (state = {}) => {
  return { state };
};
export default connect(mapStateToProps)(App);
