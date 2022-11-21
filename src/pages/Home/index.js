import { useEffect } from "react";
import { connect } from "react-redux";
import SelectUser from "../../components/SelectUser";
import { handleFetchInitialData } from "../../redux/actions/shared";
import { BackgroundImage } from "./backgroud";
import * as S from "./styles";

const Home = (props) => {
  useEffect(() => {
    props.dispatch(handleFetchInitialData());
  }, []);

  return (
    <S.FlexContainer>
      <S.WelcomeContainer>
        <h2>Let's </h2>
        <h3>Vote</h3>
        <S.BackgroundContainer>
          <BackgroundImage />
        </S.BackgroundContainer>
      </S.WelcomeContainer>
      <S.LoginContainer>
        <SelectUser />
      </S.LoginContainer>
    </S.FlexContainer>
  );
};

const mapStateToProps = (state = {}) => {
  return { state };
};
export default connect(mapStateToProps)(Home);
