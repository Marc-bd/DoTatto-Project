import styled from "styled-components";

export const StyledButtonLink = styled.button`
  background: ${(props) => props.backColor};

  border: none;
  &:hover {
    filter: brightness(110%);
  }
  img {
    width: ${(props) => props.width};
    height: ${(props) => props.width};
  }
  a {
    width: ${(props) => props.width};
    height: ${(props) => props.width};
  }
  filter: ${(props) => `invert(${props.invert})`};

  @media (min-width: 768px) {
    img {
      width: ${(props) => props.widthT768};
      height: ${(props) => props.widthT768};
    }
    a {
      width: ${(props) => props.widthT768};
      height: ${(props) => props.widthT768};
    }
  }
  @media (min-width: 1024px) {
    img {
      width: ${(props) => props.widthD1024};
      height: ${(props) => props.widthD1024};
    }
    a {
      width: ${(props) => props.widthD1024};
      height: ${(props) => props.widthD1024};
    }
  }
`;
