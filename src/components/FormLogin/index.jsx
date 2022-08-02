import { NavLink, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Container, Content } from "./style";

import Logo from "../Logo";
import Voltar from "../../assets/Voltar.svg";
import Button from "../../components/Button";
import ButtonLink from "../../components/ButtonLink";
import GitHub from "../../assets/gitHub.svg";
import { BaseInput } from "../../components/BaseInput";

import { login } from "../../services/post";



export const FormLogin = () => {
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Required field")
      .email("Invalid email: email@email.com"),
    password: yup
      .string()
      .required("Required password")
      .min(6, "Passwords are at least 6 characters long"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  async function sendData(data) {
    await login(data);
    const checkType = JSON.parse(localStorage.getItem("@DoTattoo:userInfo"));
    checkType.type === "studio"
      ? navigate("/dashartist")
      : navigate("/dashstudio");
  }

  return (
    <>
      <Container
        widthD768="400px"
        heightD768="600px"
        onSubmit={handleSubmit(sendData)}
      >
        <Content>
          <div className="formLogin__title">
            <h1>Log-on</h1>
            <ButtonLink
              image={Voltar}
              invert="0"
              onClick={() => navigate(-1)}
              className="title__goBack"
            />
          </div>

          <Logo width="15rem" invert={0} />

          <BaseInput
            register={register}
            name="email"
            placeholder="Email"
            error={errors?.email?.message}
            label="Email"
          />

          <BaseInput
            register={register}
            name="password"
            placeholder="Password"
            typePassword="password"
            label="Password"
            error={errors?.password?.message}
          />

          <div className="formLogin__createACount">
            <NavLink to="/signup">
              <span>Create a count?</span>
            </NavLink>
          </div>

          <div className="formLogin__buttons">
            <Button
              width="100%"
              height="43px"
              textColor="#000"
              backColor="#fff"
              type="submit"
            >
              Log-on
            </Button>
            <ButtonLink
              image={GitHub}
              link="https://github.com/doTattoo/doTattoo"
              widthD1024="75px"
              widthT768="65px"
              type="button"
              invert="0"
              className="buttons__git"
            />
          </div>
        </Content>
      </Container>
    </>
  );
};
