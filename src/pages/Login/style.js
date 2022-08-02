import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  overflow: hidden;
`;

export const SkullBg = styled.img`
  filter: ${(props) => `invert(${props.invert})`};

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SnakesBg = styled.img`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const JesusBg = styled.img`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: flex;

    width: 97vw;
    height: 100vh;
  }
`;

export const Bg = styled.div`
  background-color: #202020;
`;
