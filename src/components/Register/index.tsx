import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaRegister from "../../validation/schemaRegister";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, MouseEvent } from "react";
import { AuthContext } from "../../contexts/userContext";

import { StyledButton } from "../../styles/components/Button";
import { StyledInput } from "../../styles/components/Input";
import { Form, FormBox } from "./styles";
import { iUseRegister } from "../../contexts/userContext/types";
import Retangle from "../../assets/Rectangle.png";

export const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUseRegister>({
    resolver: yupResolver(SchemaRegister),
  });

  return (
    <FormBox>
      <ToastContainer />
      <img src={Retangle} alt="" />

      <Form onSubmit={handleSubmit(registerUser)}>
        <h2>Faça seu Cadastro</h2>

        <label htmlFor="name"></label>
        <StyledInput id="name" placeholder="Nome" {...register("name")} />

        <p>{errors.name?.message}</p>

        <label htmlFor="lastName"></label>

        <StyledInput
          id="lastName"
          placeholder="Sobrenome"
          {...register("last_name")}
        />
        <p>{errors.last_name?.message}</p>

        <label htmlFor="Email"></label>

        <StyledInput id="email" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <label htmlFor="password"></label>
        <StyledInput
          id="password"
          placeholder="Senha"
          {...register("password")}
        />

        <p>{errors.password?.message}</p>

        <label htmlFor="age"></label>
        <StyledInput id="age" placeholder="Idade" {...register("age")} />
        <p>{errors.age?.message}</p>

        <label htmlFor="genre"></label>

        <StyledInput id="genre" placeholder="Genero" {...register("genre")} />

        <p>{errors.genre?.message}</p>

        <label htmlFor="profission"></label>

        <StyledInput
          id="profission"
          placeholder="Profissao"
          {...register("profession")}
        />
        <p>{errors.profession?.message}</p>

        <StyledButton type="submit">Cadastrar</StyledButton>
      </Form>
    </FormBox>
  );
};
export default Register;
