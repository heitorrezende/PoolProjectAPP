import { connect } from "react-redux";
import { setLoggedUser } from "../../redux/actions/loggedUser";
import { useState } from "react";
import * as S from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

const SelectUser = (props) => {
  const { users, dispatch } = props;
  const navigate = useNavigate();
  let location = useLocation();

  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = () => {
    if (!selectedUser) return;
    dispatch(setLoggedUser(selectedUser));
    return navigate("/dashboard", { state: { from: location } });
  };

  return (
    <S.SelectUserContainer>
      <S.SelectUserTitle>Select your user</S.SelectUserTitle>
      <select
        onChange={(e) => setSelectedUser(e.target.value)}
        value={selectedUser}
      >
        <option selected value=""></option>
        {!!users &&
          users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
      </select>

      <button disabled={!selectedUser} onClick={handleClick}>
        Continue
      </button>
    </S.SelectUserContainer>
  );
};

const mapStateToProps = ({ users }) => {
  return { users: users ? Object.values(users) : null };
};

export default connect(mapStateToProps)(SelectUser);
