import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 150px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 15px 0px #141313;
  margin: 80px 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition-duration: 500ms;
    box-shadow: 0px 0px 15px 0px #141313;
  }

  cursor: pointer;
  img {
    position: absolute;
    border: none;
    border-radius: 8px;
    height: 150px;
    width: 136px;
  }
  h2 {
    z-index: 1;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    font-family: "Beau Rivage", cursive;
    color: #fff;
  }
  @media (min-width: 768px) {
    width: 268px;
    height: 283px;
    img {
      width: 268px;
      height: 283px;
    }
  }
  @media (min-width: 1024px) {
    width: 329px;
    height: 350px;
    img {
      width: 329px;
      height: 350px;
    }
  }
`;
