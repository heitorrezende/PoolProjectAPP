import { Link } from "react-router-dom";
import * as S from "./styles";
const Navagation = () => {
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
          <Link to="/newquestion">New Question</Link>
        </li>
      </ul>
    </S.NavBar>
  );
};
export default Navagation;
