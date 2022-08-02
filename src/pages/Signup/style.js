import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  font-family: "Inter";
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background-color: #000;
  width: 100vw;
  height: 100%;

  @media (min-width: 768px) {
    background-color: transparent;
    height: auto;
  }

  .containerDivs {
    background-color: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: 100%;
    width: 100%;
    gap: 10px;
    margin-top: 14px;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      background-color: #3e3e3e;
    }

    @media (min-width: 1024px) {
      justify-content: center;
      background: #202020;
      box-shadow: 6px 1px 30px 0px rgb(255 255 255);
    }
  }
`;

export const ContantImageCandle = styled.div`
  //position: relative;

  img {
    filter: brightness(0.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContantImageVictrola = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    height: 100vh;
    width: 50%;
    display: flex;
    align-items: flex-end;

    img {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ContantImageScorpion = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    filter: opacity(0.6);
    width: 100%;
  }
`;

export const ContantImageMoth = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    align-self: flex-end;
    filter: opacity(0.6);
    width: 100%;
  }
`;

export const ContainerForm = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;

  @media (min-width: 350px) {
    width: 80%;
  }
  @media (min-width: 400px) {
    width: 70%;
  }

  .menuContainerForm {
    display: none;

    @media (min-width: 768px) {
      display: block;
      margin-top: 150px;
      display: flex;

      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      align-content: center;
      padding: 10px 49px;

      .btnSignUp {
        border: none;
        background: none;
        color: #ffff;
        font-size: 19px;
      }

      img {
        align-self: center;
        margin-bottom: 10px;
      }
    }

    @media (min-width: 1024px) {
      margin-top: 0;
    }
  }

  h1 {
    font-size: 16px;
    text-align: center;
    margin: 15px 0px;
    color: #fff;

    @media (min-width: 768px) {
      font-size: 20px;
      margin-top: none;
    }
  }

  img {
    align-self: center;
  }

  @media (min-width: 450px) {
    width: 50%;
    height: auto;
  }

  @media (min-width: 768px) {
    position: static;
    flex: 1;
    background-color: #000;
  }

  @media (min-width: 1024px) {
    position: absolute;
    display: flex;
    top: 10%;
    height: 88%;
    flex-direction: column;
    filter: opacity(0.9);

    width: 28.125rem;
  }
`;
