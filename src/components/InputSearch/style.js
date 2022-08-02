import styled from "styled-components";

export const Container = styled.form`
  display: flex;

  button {
    width: ${(props) => props.widthButton};
    height: ${(props) => props.widthButton};
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #d9d9d9;
    border-radius: 0px 8px 8px 0px;
    padding: 2px;
    border: none;

    img {
      width: 100%;
    }
  }
  input {
    width: ${(props) => props.widthInput};
    height: ${(props) => props.widthButton};
    background: #454545;
    border-radius: 8px 0 0 8px;
    border: none;
    cursor: pointer;
    color: white;
    padding-left: 10px;
    font-size: ${(props) => props.fontSize};
  }
`;
