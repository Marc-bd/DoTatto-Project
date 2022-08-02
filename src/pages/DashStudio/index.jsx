import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ShowCase } from "../../components/ShowCase";
import { Container, Cont } from "./style";

export default function DashStudio() {
  return (
    <Container>
      <Cont>
        <Header isDashboard={true} profileImg ="" />
          <ShowCase isStudio={true} />
      </Cont>
      <Cont><Footer/></Cont>
    </Container>
  );
}
