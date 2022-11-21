import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, ...props }) => {
  const { loggedUser } = props.state;

  if (!loggedUser) {
    return <Navigate to="/" />;
  }

  return children;
};

const mapStateToProps = (state = {}) => {
  return { state };
};

export default connect(mapStateToProps)(PrivateRoute);
