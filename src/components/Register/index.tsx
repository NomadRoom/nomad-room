import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaRegister from "../../validation/schemaRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledButton } from "../../styles/components/Button";
import { StyledInput } from "../../styles/components/Input";
import { Form, FormBox } from "./styles";
import Retangle from "../../assets/Rectangle.png";
import { iUseRegister } from "../../contexts/AuthContext/types";
import { useAuthContext } from "../../contexts/AuthContext/hook";
import { Header } from "../Global/Header";

export const Register = () => {
  const { registerUser } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUseRegister>({
    resolver: yupResolver(SchemaRegister),
  });

  return (
    <>
      <Header />
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
    </>
  );
};
export default Register;
