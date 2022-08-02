import { StyledBaseMark } from "./style";

const BaseMark = ({
  className,
  name,
  label,
  error,
  register,
  widthBoxError,
  marginTopBotton,
  labelColor,
  labelWidth,
  ...rest
}) => {
  return (
    <StyledBaseMark
      widthBoxError={widthBoxError}
      marginTopBotton={marginTopBotton}
      labelColor={labelColor}
      labelWidth={labelWidth}
    >
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          type="checkbox"
          name={name}
          {...register(name)}
          {...rest}
          value={true}
        />
      </div>
      <p>{error}</p>
    </StyledBaseMark>
  );
};

export default BaseMark;
