import { useRouteError } from "react-router-dom";
import * as S from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/", { state: { from: location } });
  };
  return (
    <S.ErrorContainer>
      <h1>This page does not exist, please log in and access a valid page</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <S.ReturnButton onClick={handleClick}>Go to Login</S.ReturnButton>
    </S.ErrorContainer>
  );
}
