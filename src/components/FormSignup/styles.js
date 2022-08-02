import styled from "styled-components";

export const StyledFormSignup = styled.form`
  //height: 100%;
  //max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  //margin: 0;
  width: 100%;

  label {
    color: white;
  }

  .markSignup {
    width: 250px;

    p {
      font-size: 14px;
    }
    input {
      accent-color: grey;
    }

    @media (min-width: 768px) {
      align-self: center;
      width: 260px;
      margin: 7px;
    }
  }

  .selectSignUp {
    display: flex;
    align-items: flex-start;
  }

  .buttonSingup {
    align-self: flex-start;

    @media (min-width: 768px) {
      align-self: center;
    }
    @media (min-width: 1024px) {
      align-self: center;
    }
  }

  .finalTerms {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 768px) {
    overflow: auto;
    width: 70%;
  }
`;

export const StyledContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 21px;
  height: 86%;
  overflow: auto;
  width: 100%;

  @media (min-width: 768px) {
    background-color: #000;
  }

  .buttonLinkSingup {
    margin-bottom: 10px;
  }
`;
