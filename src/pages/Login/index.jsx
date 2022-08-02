import { FormLogin } from "../../components/FormLogin";
import { Bg, Container, JesusBg, SkullBg, SnakesBg } from "./style";
import skull from "../../assets/background/skull.svg";
import snakeDagger from "../../assets/background/snakeDagger.svg";
import jesus from "../../assets/background/jesus.svg";

export default function Login() {
  return (
    <>
      <Bg>
        <Container>
          <FormLogin />
          <SkullBg src={skull} />
        </Container>
        <SnakesBg src={snakeDagger} />
        <JesusBg src={jesus} />
      </Bg>
    </>
  );
}
