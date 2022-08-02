import { FormSignup } from "../../components/FormSignup";
import {
  Container,
  ContainerForm,
  ContantImageCandle,
  ContantImageMoth,
  ContantImageScorpion,
  ContantImageVictrola,
} from "./style";
import Logo from "../../components/Logo";
import vela from "../../assets/vela.svg";
import Vitrola from "../../assets/Vitrola.svg";
import mariposa from "../../assets/mariposa.svg";
import escorpiao from "../../assets/escorpiao.svg";
import ButtonBack from "../../components/ButtonBack";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className="containerDivs">
        <ContantImageCandle>
          <img src={vela} alt="background imagem" />
        </ContantImageCandle>

        <ContantImageVictrola>
          <img src={Vitrola} alt="background imagem" />
        </ContantImageVictrola>

        <ContantImageMoth>
          <img src={mariposa} alt="background imagem" />
        </ContantImageMoth>

        <ContantImageScorpion>
          <img src={escorpiao} alt="background imagem" />
        </ContantImageScorpion>

        <ContainerForm>
          <div className="menuContainerForm">
            <button className="btnSignUp" onClick={goToLogin}>
              Sign up
            </button>
            <ButtonBack onClick={goToHome} />
          </div>
          <h1>Sing Up </h1>
          <Logo width="8rem" widthT768="11rem" invert="1" />
          <FormSignup />
        </ContainerForm>
      </div>
    </Container>
  );
}
