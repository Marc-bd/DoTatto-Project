import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #121214;
  width: 100vw;
  height: 100vh;

  @media (min-width: 768px) {
    max-width: ${(props) => props.widthD768};
    max-height: ${(props) => props.heightD768};
    filter: opacity(0.9);
    z-index: 10;
  }

  @media (min-width: 1024px) {
    width: ${(props) => props.widthD1024};
    height: ${(props) => props.heightD1024};
    filter: opacity(0.9);
  }
  .formLogin__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
      color: #fff;
      font-style: normal;
      font-size: 25px;
      font-weight: 400;
    }

    .title__goBack {
      img {
        width: 45px;

        @media (min-width: 768px) {
          width: 55px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;

  label + div {
    width: 100%;
  }
  div + img {
    margin: 1rem 0 1rem 0;
  }

  label {
    color: #fff;
  }
  .formLogin__createACount {
    align-self: flex-end;

    span {
      color: #fff;
      margin-top: 0;
    }
  }

  .formLogin__buttons {
    align-self: center;
    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    margin-top: 1.5rem;

    .buttons__git {
      img {
        width: 55px;

        @media (min-width: 768px) {
          width: 65px;
        }

        @media (min-width: 1440px) {
          width: 75px;
        }
      }
    }
  }
`;
