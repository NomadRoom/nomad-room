import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaLogin from "../../validation/schemaLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/userContext";
import { StyledButton } from "../../styles/components/Button";
import { StyledInput } from "../../styles/components/Input";
import Retangle from "../../assets/Rectangle.png";
import { FormLogin } from "./styles";
import { iUserLogin } from "../../contexts/userContext/types";
import { FormBox } from "../Login/styles";

const Login = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(SchemaLogin),
  });

  return (
    <FormBox>
      <ToastContainer />
      <img src={Retangle} alt="" />
      <FormLogin onSubmit={handleSubmit(login)}>
        <h2>Faça seu Login</h2>
        <label htmlFor="Email"></label>
        <StyledInput placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label htmlFor="Senha"></label>
        <StyledInput placeholder="Senha" {...register("password")} />
        <p>{errors.password?.message}</p>
        <StyledButton type="submit">Entrar</StyledButton>
      </FormLogin>
    </FormBox>
  );
};

export default Login;
