import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getUser } from "../../services/get";
import { BaseInput } from "../BaseInput";
import Button from "../Button";
import { StyledProfileEdit, StyledSection } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUser } from "../../services/patch";

export const ProfileEdit = ({ userId }) => {
  const [value, setValue] = useState({});

  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Campo Obrigatório!")
      .min(8, "Mínimo de 8 digitos!"),
  });

  useEffect(() => {
    async function get() {
      setValue(await getUser(userId));
    }
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    let defaultValues = {};
    defaultValues.name = value.name;
    defaultValues.telefone = value.phone;
    defaultValues.cep = value.cep;
    defaultValues.description = value.description;
    defaultValues.img_perfil = value.img_perfil;
    defaultValues.num_home = value.num_home;

    reset({ ...defaultValues });
  }, [reset, value]);

  const onSubmitFunction = async (data) => {
    await editUser(data);
  };

  return (
    <StyledSection>
      <StyledProfileEdit onSubmit={handleSubmit(onSubmitFunction)}>
        <BaseInput register={register} label="Nome" name="name" disabled />
        <BaseInput register={register} label="Telefone" name="telefone" />
        <BaseInput
          register={register}
          label="Senha"
          name="password"
          placeholder="Digite sua nova senha"
          typePassword={"password"}
          error={errors.password?.message}
        />
        <BaseInput register={register} label="CEP" name="cep" />
        <BaseInput
          register={register}
          label="Número do local"
          name="num_home"
        />
        <BaseInput register={register} label="Descrição" name="description" />
        <BaseInput
          register={register}
          label="Imagem do Perfil"
          name="img_perfil"
        />
        <Button
          type="submit"
          width={"100%"}
          height={"45px"}
          widthT768={"100%"}
          widthD1024={"100%"}
          className={"buttonSingup"}
          backColor="#282828"
          textColor="#FFFFFF"
        >
          Editar Profile
        </Button>
      </StyledProfileEdit>
    </StyledSection>
  );
};
