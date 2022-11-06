import { Header } from "../../components/Global/Header";
import { HeadlineMedium } from "../../components/Global/Headlines/HeadlineMedium";
import { StyledButton } from "../../styles/components/Button";
import { DivInputs, DivIntro, FormValidation } from "./style";
import photo from "../../assets/inputFile.svg";

export const ValidationUser = () => {
  return (
    <>
      <Header />
      <HeadlineMedium />
      <FormValidation>
        <DivIntro>
          <h2>Finalize seu cadastro</h2>
          <p>Carregue uma foto sua, e diga mais sobre você</p>
        </DivIntro>
        <DivInputs>
          <label htmlFor="photo">
            <img src={photo} alt="Foto" />
          </label>
          <input type="file" name="photo" id="photo" />
          <textarea id="about" name="about" rows={5} cols={100} />
        </DivInputs>
        <StyledButton>Finalizar</StyledButton>
      </FormValidation>
    </>
  );
};
