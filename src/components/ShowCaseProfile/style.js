import styled from "styled-components";

export const StyledShowCase = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: scroll;
  max-width: 315px;

  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: hidden;

  gap: 10px;
  background-color: #454545;
  padding: 10px;
  border-radius: 20px 20px 20px 20px;
  margin-bottom: 15px;

  @media (min-width: 400px) {
    max-width: 400px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
    max-width: 700px;

    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
    max-width: 1024px;

    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  @media (min-width: 1524px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
    max-width: 1524px;

    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  @media (min-width: 1724px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
    max-width: 1650px;

    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  @media (min-width: 2024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
    max-width: 1900px;

    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .noAdv {
    color: #ffffff;
  }

  section {
    max-height: 500px;

    @media (min-width: 768px) {
      width: min-content;
    }
  }
`;
