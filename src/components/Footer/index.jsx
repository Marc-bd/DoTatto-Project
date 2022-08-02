import github from "../../assets/gitHub.svg";
import { AditionalInfo, Spotlights, StyledFooter } from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useState } from "react";
import { useEffect } from "react";

function Footer() {
  const navigate = useNavigate();
  const [size, setSize] = useState({
    w: window.clientWidth,
    h: window.clientHeight,
  });

  useEffect(() => {
    const resize = () => {
      setSize({
        w: window.document.body.clientWidth,
        h: window.document.body.clientHeight,
      });
    };

    window.addEventListener("resize", resize);
    resize();
  }, []);

  return (
    <StyledFooter backColor={"#454545"} textColor={"white"} size={size}>
      <Logo
        width={"160px"}
        height={"auto"}
        widthD1024={"212px"}
        widthT768={"190px"}
        invert={`true`}
        onClick={() => {
          navigate("/");
        }}
      />
      <p
        className="copy"
        onClick={() => {
          navigate("/inprogress");
        }}
      >
        © Copyright 2022 - DoTatto - Todos os direitos reservados DoTatto com
        Agência de Tatuadores Online S.A. CNPJ 10.110.100/0001-11 / Avenida dos
        Desenvolvedores Depressivos, nº 1011, Vila React, Libs/SP - CEP
        01.010-101
      </p>
      <Spotlights>
        <li
          onClick={() => {
            navigate("/inprogress");
          }}
        >
          Termos de uso
        </li>
        <li
          onClick={() => {
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Sobre o DoTatto
        </li>
        <li>
          <a
            href="https://github.com/doTattoo"
            target={"_blank"}
            rel="noreferrer"
          >
            Social <img src={github} alt="Logotipo GitHub" />
          </a>
        </li>
      </Spotlights>
      <AditionalInfo>
        <li>Política de privacidade</li>
        <li>Proteção à propriedade intelectual</li>
      </AditionalInfo>
    </StyledFooter>
  );
}

export default Footer;
