import { Header } from "../../components/Global/Header";
import { HeadlineMedium } from "../../components/Global/Headlines/HeadlineMedium";
import { StyledButton } from "../../styles/components/Button";
import { DivInputs, DivIntro, FormValidation } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const ValidationUser = () => {
  const { UserValidation } = useContext(AuthContext);
  const formSchema = yup.object().shape({
    profile_photo: yup.string().required("Foto Obrigatória"),
    about: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Header />
      <HeadlineMedium />
      <FormValidation onSubmit={handleSubmit(UserValidation)}>
        <DivIntro>
          <h2>Finalize seu cadastro</h2>
          <p>Carregue uma foto sua, e diga mais sobre você</p>
        </DivIntro>
        <DivInputs>
          <div>
            <label htmlFor="photo">Insira Url de sua foto</label>
            <input type="text" id="photo" {...register("profile_photo")} />
          </div>
          <div>
            <label htmlFor="about">Conte mais sobre você</label>
            <textarea id="about" rows={5} cols={100} {...register("about")} />
          </div>
        </DivInputs>
        <StyledButton>Finalizar</StyledButton>
      </FormValidation>
    </>
  );
};
