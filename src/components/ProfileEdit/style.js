import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 20px;
`;

export const StyledProfileEdit = styled.form`
  background-color: #d9d9d9;
  margin: 0 auto;
  width: 95vw;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 20px;

  div {
    max-width: 300px;
  }

  input {
    width: 100%;
  }

  section {
    width: 100%;
    max-width: 1000px;
  }

  @media screen and (max-width: 768px) {
    div {
      margin: 0 auto;
      max-width: 90%;
    }
  }
`;

export const RequestCotainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  width: calc(95vw - 20px);
  max-width: 1000px;
  gap: 20px;

  @media screen and (max-width: 768px) {
    width: 95vw;
    flex-direction: column;
  }
`;

export const MaxContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
