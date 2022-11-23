import { useEffect } from "react";
import { connect } from "react-redux";
import SelectUser from "../../components/SelectUser";
import { handleFetchInitialData } from "../../redux/actions/shared";

import * as S from "./styles";

import { useLocation } from "react-router-dom";
import WelcomeContainer from "./WelcomContainer";
const Home = (props) => {
  const { dispatch, state } = props;
  useEffect(() => {
    if (state === {}) dispatch(handleFetchInitialData());
  }, [dispatch, state]);

  let location = useLocation();

  return (
    <>
      <S.FlexContainer>
        <WelcomeContainer />
        <S.LoginContainer>
          {!!location.state.cameFromPrivateRoute && (
            <S.Warning>Please login to access this page</S.Warning>
          )}
          <SelectUser />
        </S.LoginContainer>
      </S.FlexContainer>
    </>
  );
};

const mapStateToProps = (state = {}) => {
  return { state };
};
export default connect(mapStateToProps)(Home);
