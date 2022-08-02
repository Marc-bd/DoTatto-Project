import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
import { StyledImg } from "./style";

const Logo = ({
  width,
  height,
  invert = 1, //o para branco
  backColor,
  widthT768,
  heightT768,
  widthD1024,
  heightD1024,
}) => {
  const navigate = useNavigate();
  return (
    <StyledImg
      width={width}
      height={height}
      invert={invert}
      backColor={backColor}
      src={LogoImg}
      widthT768={widthT768}
      heightT768={heightT768}
      widthD1024={widthD1024}
      heightD1024={heightD1024}
      alt="Logo doTattoo"
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
