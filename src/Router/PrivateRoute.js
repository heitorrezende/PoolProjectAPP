import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ children, ...props }) => {
  const { loggedUser } = props.state;
  console.log("loggedUser", loggedUser);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (!loggedUser) {
      return navigate("/", { state: { from: location } });
    }
  }, [loggedUser, navigate, location]);

  if (loggedUser) return children;
};

const mapStateToProps = (state = {}) => {
  return { state };
};

export default connect(mapStateToProps)(PrivateRoute);
