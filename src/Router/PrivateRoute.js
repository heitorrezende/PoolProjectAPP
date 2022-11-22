import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children, ...props }) => {
  const { loggedUser } = props.state;

  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (!loggedUser) {
      return navigate("/", {
        state: { from: location, cameFromPrivateRoute: true },
      });
    }
  }, [location, loggedUser, navigate]);

  if (loggedUser) return children;
};

const mapStateToProps = (state = {}) => {
  return { state };
};

export default connect(mapStateToProps)(PrivateRoute);
