import { Container } from "./style";
import lupa from "../../assets/lupaPesquisa.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { artistFilter, studioFilter } from "../../services/filters";

export const InputSearch = ({
  nameOfKey,
  isStudio,
  widthButton,
  widthInput,
  fontSize,
  ...rest
}) => {
  const { setArrInfo } = useContext(SearchContext);

  const { register, handleSubmit, reset } = useForm();

  async function setApiFilter(namekey, boo, infos) {
    boo
      ? setArrInfo(await studioFilter(namekey, infos.searchText, true))
      : setArrInfo(await artistFilter(namekey, infos.searchText, true));
  }

  const onSubmitFunction = (data) => {
    reset();
    setApiFilter(nameOfKey, isStudio, data);
  };

  return (
    <Container
      onSubmit={handleSubmit(onSubmitFunction)}
      widthInput={widthInput}
      widthButton={widthButton}
      fontSize={fontSize}
      {...rest}
    >
      <input type="text" {...register("searchText")} />
      <button type="submit">
        <img src={lupa} alt="imagem de lupa" />
      </button>
    </Container>
  );
};

export default InputSearch;
