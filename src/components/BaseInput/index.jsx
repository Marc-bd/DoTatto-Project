import { Container, InputContent } from "./styles";
import passwordof from "./../../assets/icons/passwordof.svg";
import passwordshow from "./../../assets/icons/passwordshow.svg";
import { useState } from "react";

export const BaseInput = ({
  label,
  typePassword,
  register,
  name,
  error,
  ...rest
}) => {
  const [typeImage, setTypeImage] = useState(passwordof);
  const [typeInput, setTypeInput] = useState("password");

  function toggleImagePasword() {
    if (typeImage === passwordof) {
      setTypeImage(passwordshow);
      setTypeInput("text");
    } else {
      setTypeImage(passwordof);
      setTypeInput("password");
    }
  }

  return (
    <Container>
      {<label>{label}</label>}
      {typePassword === "password" ? (
        <>
          <InputContent isErrored={!!error}>
            <input {...register(name)} {...rest} type={typeInput} />
            {
              <img
                src={typeImage}
                onClick={toggleImagePasword}
                alt="password icon"
              />
            }
          </InputContent>
          {!!error && <span className="errorMessage"> {error} </span>}
        </>
      ) : (
        <>
          <InputContent isErrored={!!error}>
            <input {...register(name)} {...rest} />
          </InputContent>
          {!!error && <span className="errorMessage"> {error} </span>}
        </>
      )}
    </Container>
  );
};
