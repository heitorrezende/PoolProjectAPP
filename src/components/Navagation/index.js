import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { setLoggedUser } from "../../redux/actions/loggedUser";

const Navagation = (props) => {
  const { loggedUser, dispatch } = props;
  const navigate = useNavigate();
  let location = useLocation();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setLoggedUser(""));
    return navigate("/", { state: { from: location } });
  };
  return (
    <S.NavBar>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">New Question</Link>
        </li>
      </ul>
      <S.loggedUser>
        {!!loggedUser && (
          <>
            {loggedUser}
            <button onClick={handleClick}>Logout</button>
          </>
        )}
      </S.loggedUser>
    </S.NavBar>
  );
};

const mapStateToProps = ({ loggedUser }) => {
  return { loggedUser };
};
export default connect(mapStateToProps)(Navagation);
