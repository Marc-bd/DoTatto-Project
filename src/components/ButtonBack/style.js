import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background: none;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  &:hover {
    filter: brightness(110%);
  }

  @media (min-width: 768px) {
    width: ${(props) => props.widthT768};
    height: ${(props) => props.widthT768};
  }
  @media (min-width: 1024px) {
    width: ${(props) => props.widthD1024};
    height: ${(props) => props.widthD1024};
  }
`;

export const Styledimg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  filter: ${(props) => `invert(${props.invert})`};
  @media (min-width: 768px) {
    width: ${(props) => props.widthT768};
    height: ${(props) => props.widthT768};
  }
  @media (min-width: 1024px) {
    width: ${(props) => props.widthD1024};
    height: ${(props) => props.widthD1024};
  }
`;
