import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 7px;
  @media (min-width: 768px) {
    padding: 15px;
  }
  @media (min-width: 1024px) {
  }
`;
export const Cont = styled.div`
  width: ${(props) => (props.width ? props.width : "800px")};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.padding ? props.padding : "")};
  padding-bottom: 15px;
  div {
    padding: 15px;
    select {
      height: 40px;
      width: 230px;
      border: none;
      background-color: #454545;
      border-radius: 8px;
      color: #ffffff;
      margin: 3px 5px 3px 5px;
    }
  }
`;

export const StyledShowCase = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  background-color: #626262;
  padding: 10px;
  border-radius: 0 0 20px 20px;
  min-height: 40vh;

  padding-top: 40px;
  @media (min-width: 768px) {
    min-height: 52vh;
  }
  @media (min-width: 1024px) {
    min-height: 62vh;
  }
`;

export const StyledFilter = styled.form`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 20px 20px 0 0;
  height: min-content;
  padding: 0 15px;
  div {
  }
`;
