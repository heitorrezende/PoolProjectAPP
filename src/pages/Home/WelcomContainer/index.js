import * as S from "./styles";
import { BackgroundImage } from "../backgroud";
const WelcomeContainer = () => {
  return (
    <S.WelcomeContainer>
      <h2>Let's </h2>
      <h3>Vote</h3>
      <S.BackgroundContainer>
        <BackgroundImage />
      </S.BackgroundContainer>
    </S.WelcomeContainer>
  );
};
export default WelcomeContainer;
