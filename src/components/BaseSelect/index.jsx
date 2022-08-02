import { StyledBaseSelect, StyledBox } from "./style";

const BaseSelect = ({
  array,
  idFor,
  label,
  register,
  className,

  marginTopBottom,
  labelColor,
  widthSelect,
  heightSelect,
  maxWidthSelect,
  selectTextColor,
  selectColor,
  labelFontSize,
  widthBox,
  ...rest
}) => {
  return (
    <StyledBox
      className={className}
      widthSelect={widthSelect}
      marginTopBottom={marginTopBottom}
      labelColor={labelColor}
      labelFontSize={labelFontSize}
      widthBox={widthBox}
    >
      <label htmlFor={idFor}>{label}</label>
      <StyledBaseSelect
        heightSelect={heightSelect}
        maxWidthSelect={maxWidthSelect}
        selectColor={selectColor}
        selectTextColor={selectTextColor}
        widthSelect={widthSelect}
        id={idFor}
        {...register(`${idFor}`)}
        {...rest}
      >
        {array.map((elem, i) => (
          <option key={i} value={elem.value}>
            {elem.text}
          </option>
        ))}
      </StyledBaseSelect>
    </StyledBox>
  );
};

export default BaseSelect;
