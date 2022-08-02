import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ShowCase } from "../../components/ShowCase";
import { Container, Cont } from "./style";

export default function DashArtist() {
  return (
    <Container>
      <Cont>
        <Header isDashboard={true} profileImg = "" />
        <ShowCase isStudio={false} />
      </Cont>
      <Cont><Footer/></Cont>
    </Container>
  );
}
