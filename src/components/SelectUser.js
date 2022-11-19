import { connect } from "react-redux";

const SelectUser = (props) => {
  const { users } = props;
  console.log("user", props);
  return (
    <>
      <h1>Selecione o usuário</h1>
      <select name="Users">
        <option disabled selected value>
          Select your user{" "}
        </option>
        {!!users &&
          users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
      </select>
    </>
  );
};

const mapStateToProps = ({ users }) => ({
  users: users ? Object.values(users) : null,
});
export default connect(mapStateToProps)(SelectUser);
