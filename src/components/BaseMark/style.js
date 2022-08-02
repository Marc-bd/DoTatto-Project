import styled from "styled-components";

export const StyledBaseMark = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  margin: ${(props) => props.marginTopBotton} 0;
  .cssTerms {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    label {
      color: ${(props) => props.labelColor};
      width: ${(props) => props.labelWidth};
    }
  }
  p {
    color: red;
    width: ${(props) => props.widthBoxError};
    word-break: break-word;
    text-align: center;
  }

  .markSignup {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
`;
