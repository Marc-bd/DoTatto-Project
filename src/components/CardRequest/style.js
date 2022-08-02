import styled from "styled-components";

export const CenteredDiv = styled.div`
  margin: 0 auto;
  width: auto;
`;

export const StyledCardRequest = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding-bottom: 10px;
  gap: 10px;

  h2 {
    padding: 5px;
    background-color: #4c4c4c;
    width: 100%;
    color: #ffffff;
    height: 40px;

    text-align: center;
    border-radius: 10px 10px 0 0;
  }

  section {
    display: flex;
    border: 2px solid #4c4c4c;
    min-width: 180px;
    height: fit-content;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 5px;

    button {
      padding: 3px 0;
      border-radius: 0;
    }

    .status {
      color: red;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 495px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
    justify-content: left;
    overflow-x: auto;
    flex-wrap: nowrap;
  }
`;
