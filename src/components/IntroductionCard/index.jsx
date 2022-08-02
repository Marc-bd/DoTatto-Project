import {
  Container,
  ContPosition,
  Cont,
  ContImage,
  Image,
  DevName,
  DevFunction,
  GitHubIcon,
  LinkedInIcon,
  GitHubIconRight,
  LinkedInIconRight,
} from "./style";

import GitHub from "../../assets/gitHub.svg";
import LinkedIn from "./../../assets/LinkedIn.svg";

import ButtonLink from "../ButtonLink";

export const IntroductionCard = (developer) => {
  return (
    <Container>
      <ContPosition>
        <ContImage>
          <GitHubIcon>
            <ButtonLink
              width="45px"
              widthT768={"101px"}
              widthD1024={"130px"}
              image={GitHub}
              invert={0.5}
              link={developer.github}
            />
          </GitHubIcon>
          <Image className="img" src={developer.image} alt="#" />
          <LinkedInIcon>
            <ButtonLink
              width="34px"
              widthT768={"76px"}
              widthD1024={"110px"}
              image={LinkedIn}
              invert={0}
              link={developer.github}
            />
          </LinkedInIcon>
        </ContImage>

        <Cont>
          <DevName>{developer.name}</DevName>
          <DevFunction left="5px">{developer.function}</DevFunction>
        </Cont>
      </ContPosition>
    </Container>
  );
};
export const IntroductionCardRight = (developer) => {
  return (
    <>
      <Container fDirection="row-reverse">
        <ContPosition jContent="flex-end">
          <Cont>
            <DevName left="0px">{developer.name}</DevName>
            <DevFunction>{developer.function}</DevFunction>
          </Cont>
          <ContImage>
            <GitHubIconRight>
              <ButtonLink
                width="45px"
                widthT768={"101px"}
                widthD1024={"130px"}
                invert={0.5}
                image={GitHub}
                link={developer.github}
              />
            </GitHubIconRight>
            <Image className="img" src={developer.image} alt="#" />
            <LinkedInIconRight>
              <ButtonLink
                width="34px"
                widthT768={"76px"}
                widthD1024={"110px"}
                invert={0}
                image={LinkedIn}
                link={developer.linkedin}
              />
            </LinkedInIconRight>
          </ContImage>
        </ContPosition>
      </Container>
    </>
  );
};
