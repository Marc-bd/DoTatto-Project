import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  * {
    font-family: "Inter";
  }
`;
export const StyledBox = styled.form`
  width: 90vw;
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 20px;
  button {
    margin: 20px 0;
  }
  div,
  label {
    margin-left: 5px;
  }
`;

export const StyledSection = styled.section`
  padding: 15px;
  display: flex;
  gap: 20px;
  overflow-x: auto;

  button {
    margin-top: 10px;
  }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px;
  min-height: 100vh;
  overflow-y: auto;
  height: 100vh;
  width: 100vw;

  position: fixed;
  z-index: 100;
  top: 0;

  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  .close {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export const NewAdContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 95vw;
  max-width: 1000px;

  button {
    margin-top: 10px;
    width: 100vw;
    max-width: 500px;
    height: 45px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    transition: all 0.3s linear;
  }

  button:hover {
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 768px) {
    button {
      background-color: white;
      color: black;
    }
  }
`;
