import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledContainer, StyledFormSignup } from "./styles";
import { Sign } from "../../services/post";
import { BaseInput } from "../../components/BaseInput";
import BaseMark from "../BaseMark";
import BaseSelect from "../BaseSelect";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import GitHub from "../../assets/gitHub.svg";

export const FormSignup = () => {

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().required("Campo Obrigatório!").email("Email inválido"),
    cnpj: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})",
        "CNPJ inválido"
      ),
    password: yup
      .string()
      .required("Campo Obrigatório!")
      .min(8, "Mínimo de 8 digitos!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas devem ser iguais!")
      .required("Campo Obrigatório!"),
    telefone: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
        "telefone inválido"
      ),
    terms: yup
      .bool()
      .oneOf([true], "Para a utilização do app, o aceite é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    delete data["passwordConfirm"];

    data.cep = "";
    data.num_home = "";
    data.img_perfil = "";
    data.description = "";
    data.history = [];

    await Sign(data);
  
  };

  const typeClient = [
    {
      value: "artist",
      text: "Tatuador",
    },
    {
      value: "studio",
      text: "Estúdio",
    },
  ];

  return (
    <StyledContainer>
      <StyledFormSignup onSubmit={handleSubmit(onSubmitFunction)}>
        <BaseInput
          label="Nome"
          placeholder="Digite aqui seu nome"
          register={register}
          name="name"
          error={errors.name?.message}
        />

        <BaseInput
          label="Email"
          placeholder="Digite aqui seu email"
          register={register}
          name="email"
          error={errors.email?.message}
        />

        <BaseInput
          label="CNPJ"
          placeholder="Digite seu CNPJ"
          {...register("cnpj")}
          name="cnpj"
          register={register}
          error={errors.cpf?.message}
        />

        <BaseInput
          label="Senha"
          placeholder="Digite sua senha"
          {...register("password")}
          name="password"
          register={register}
          error={errors.password?.message}
          typePassword="password"
        />

        <BaseInput
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          {...register("passwordConfirm")}
          name="passwordConfirm"
          register={register}
          error={errors.passwordConfirm?.message}
          typePassword="password"
        />

        <BaseInput
          label="Telefone"
          placeholder="Digite aqui seu Telefone"
          {...register("telefone")}
          name="telefone"
          register={register}
          error={errors.telefone?.message}
        />

        <BaseSelect
          label="Selecionar o Tipo de Conta"
          idFor="type"
          array={typeClient}
          register={register}
          widthSelect={"95%"}
          widthBox={"100%"}
          selectColor={"var(--grey)"}
          selectTextColor={"var(--white)"}
          className="selectSignUp"
        />
        <div className="finalTerms">
          <BaseMark
            register={register}
            name="terms"
            label="Eu aceito os termos de uso"
            error={errors.terms?.message}
            labelWidth={"100%"}
            marginTopBotton={"5px 0px"}
            className={"markSignup"}
          />
          <Button
            type="submit"
            width={"95%"}
            height={"45px"}
            widthT768={"80%"}
            widthD1024={"80%"}
            className={"buttonSingup"}
          >
            Cadastrar
          </Button>
        </div>
      </StyledFormSignup>
      <ButtonLink
        link="https://github.com/doTattoo/doTattoo"
        width={"60px"}
        widthT768={"80px"}
        widthD1024={"50px"}
        image={GitHub}
        invert
        className="buttonLinkSingup"
      />
    </StyledContainer>
  );
};
