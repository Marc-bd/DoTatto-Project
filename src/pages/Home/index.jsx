import React from "react";
// import { useEffect } from "react";
import {
  Container,
  Cont,
  Image,
  ContBackground,
  BackgroundImage,
} from "./style";
import { Developers } from "../../data/developers";
import {
  IntroductionCard,
  IntroductionCardRight,
} from "../../components/IntroductionCard";
import { RedirectCard } from "../../components/RedirectCard";
import Logo from "./../../components/Logo";
import Footer from "./../../components/Footer";

import FirstLetter from "./../../assets/firstLetterText.svg";
import { ReactComponent as SVG } from "./../../assets/flowerVase.svg";
// import { login } from "../../services/post";

import Header from "./../../components/Header";

export default function Home() {
  // useEffect(() => {
  //   async function get() {
  //     await login({
  //       email: "kenzie@kenzie.com",
  //       password: "123456",
  //     });
  //   }
  //   get();
  // }, []);

  return (
    <Container>
      <Header />
      <ContBackground>
        <SVG />
        <BackgroundImage
          src={SVG}
          position="sticky"
          height="100vh"
          alt={"faceTatto"}
        />
        <Cont>
          <Image src={FirstLetter} alt={"firstLetterText"} />
          <p>
            atuador(a) não tem a possibilidade de ser um ‘nômade digital’ se não
            conhecer outros tatuadores(as), então estamos encurtando as relações
            com nosso serviço de aluguel de bancada.
          </p>
        </Cont>
        <Cont>
          <RedirectCard>Tatuador(a)</RedirectCard>
          <RedirectCard>Studio</RedirectCard>
        </Cont>

        <Cont mBottom="-30px" aItens="center" margin="20px" fDirection="column">
          <Logo width={"90%"} invert={0} />
          <h4>Developers</h4>
        </Cont>
        <Cont mBottom="20px" fDirection="column">
          {Developers.map((dev, index) => {
            return (
              <div key={index}>
                {index % 2 === 0 ? (
                  <>{IntroductionCard(dev)}</>
                ) : (
                  <>{IntroductionCardRight(dev)}</>
                )}
              </div>
            );
          })}
        </Cont>
      </ContBackground>
      <Footer />
    </Container>
  );
}
