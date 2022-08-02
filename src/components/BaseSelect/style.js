import styled from "styled-components";

export const StyledBox = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 10px;
  margin: ${(props) => props.marginTopBottom} 0;
  width: ${(props) => props.widthBox};
  label {
    width: ${(props) => props.widthSelect};
    max-width: ${(props) => props.maxWidthSelect};
    color: ${(props) => props.labelColor};
    font-size: ${(props) => props.labelFontSize};
  }
`;
export const StyledBaseSelect = styled.select`
  width: ${(props) => props.widthSelect};
  height: ${(props) => props.heightSelect};
  max-width: ${(props) => props.maxWidthSelect};
  border: none;
  background-color: ${(props) => props.selectColor};
  color: ${(props) => props.selectTextColor};
  padding: 10px;
  border-radius: 8px;
`;
