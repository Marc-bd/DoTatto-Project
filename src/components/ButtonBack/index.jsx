import React from "react";
import backImg from "../../assets/Voltar.svg";
import { StyledButton, Styledimg } from "./style";

const ButtonBack = ({ width, widthT768, widthD1024, invert, ...rest }) => {
  return (
    <>
      <StyledButton width={width} widthT768={widthT768} widthD1024={widthD1024} {...rest}>
        <Styledimg
          src={backImg}
          alt="Seta para voltar"
          invert={invert}
          width={width}
          widthT768={widthT768}
          widthD1024={widthD1024}
        />
      </StyledButton>
    </>
  );
};

export default ButtonBack;
