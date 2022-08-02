import { StyledButtonLink } from "./style";

const ButtonLink = ({
  link,
  width,
  invert = 1,
  backColor = "none",
  widthT768,
  image,
  widthD1024,
  ...rest
}) => {
  return (
    <StyledButtonLink
      width={width}
      invert={invert}
      backColor={backColor}
      widthT768={widthT768}
      widthD1024={widthD1024}
      {...rest}
    >
      <a href={link} target={"_blank"} rel="noreferrer">
        <img src={image} alt="Logo GitHub" />
      </a>
    </StyledButtonLink>
  );
};

export default ButtonLink;
