import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px;
  width: 100%;
  .errorMessage {
    color: var(--red);
    font-size: 11px;
    font-weight: bold;
  }
`;

export const InputContent = styled.div`
  width: 95%;
  height: 37px;
  background: var(--grey);
  border-radius: 10px;
  border: 2px solid var(--grey);
  color: var(--white);
  padding: 1rem;
  display: flex;
  transition: 0.4s;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);

      svg {
        color: var(--red);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--white);
    width: 50%;

    &::placeholder {
      color: #d4cecd;
    }
  }
  img {
    width: 40px;
    cursor: pointer;
  }
`;
