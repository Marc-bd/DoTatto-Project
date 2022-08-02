import styled from "styled-components";

export const StyledPage = styled.div`
  background-color: #454545;

  * {
    font-family: "Inter";
  }
`;

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto 0 auto;
  width: fit-content;
  gap: 10px;

  button {
    height: 30px;
    width: 100px;
    font-family: "Inter";
    background-color: transparent;
    border: 1px solid white;
    color: white;
    transition: all 0.3s;
  }

  .selected {
    background-color: white;
    color: black;
  }
`;
