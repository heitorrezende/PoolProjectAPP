import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const ReturnToDashboard = () => {
  const navigate = useNavigate();

  const navigateHome = (e) => {
    e.preventDefault();
    return navigate(`/dashboard`);
  };

  return (
    <S.ReturnButton onClick={navigateHome}>Return to dashboard</S.ReturnButton>
  );
};
export default ReturnToDashboard;
