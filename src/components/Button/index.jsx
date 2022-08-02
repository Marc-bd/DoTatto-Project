import React from "react";
import { StyledButton } from "./style";

const Button = ({
  width,
  height,
  backColor,
  textColor,
  children,
  widthT768,
  widthD1024,
  heightT768,
  heightD1024,
  ...rest
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      backColor={backColor}
      textColor={textColor}
      widthT768={widthT768}
      widthD1024={widthD1024}
      heightT768={heightT768}
      heightD1024={heightD1024}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
