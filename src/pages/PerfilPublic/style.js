import styled from "styled-components";

export const Container = styled.div`
  background-color: #282828;
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contentMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-start;
    }

    @media (min-width: 1024px) {
      display: flex;
      width: 100%;
      justify-content: center;
    }

    footer {
      position: relative;
    }
  }

  .contentProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-align: center;
      width: 135px;
      border: 1px solid #3f3f3f;
      border-bottom: none;
      height: 34px;
      background-color: #454545;
      border-radius: 15px 15px 0px 0px;
    }
  }

  .contentAnuncios {
  }
`;
