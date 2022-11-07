import { Header } from "../../components/Global/Header";
import { HeadlineMedium } from "../../components/Global/Headlines/HeadlineMedium";
import { StyledButton } from "../../styles/components/Button";
import { DivInputs, DivIntro, FormValidation } from "./style";

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
          <input type="file" />
          <textarea id="about" name="about" rows={5} cols={100} />
        </DivInputs>
        <StyledButton>Finalizar</StyledButton>
      </FormValidation>
    </>
  );
};
