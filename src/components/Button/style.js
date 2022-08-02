import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.textColor};
  border: none;
  border-radius: 8px;
  &:hover {
    filter: brightness(110%);
  }
  @media (min-width: 768px) {
    width: ${(props) => props.widthT768};
    height: ${(props) => props.heightT768};
  }
  @media (min-width: 1024px) {
    width: ${(props) => props.widthD1024};
    height: ${(props) => props.heightD1024};
  }
`;
