import styled from "styled-components";

export const StyledInfoUser = styled.section`
  width: 19rem;
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid #030303;
  border-radius: 8px;

  justify-content: space-between;
  align-items: center;
  padding: 15px;
  color: #fff;

  margin-bottom: 8px;

  .infoBox {
    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h2 {
      font-size: 28px;
      text-transform: capitalize;
    }

    p {
      line-break: anywhere;
      width: 250px;
      font-size: 15px;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      width: 250px;
      gap: 5px;
      span {
        font-size: 12px;
      }
    }
  }
  img {
    width: 19rem;
    height: 115px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;

    @media (min-width: 768px) {
      width: 8rem;
      border-radius: 100%;
    }
  }
  @media (min-width: 1024px) {
    width: 350px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
