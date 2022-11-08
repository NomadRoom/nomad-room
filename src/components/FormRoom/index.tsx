import {
  ContainerAboutRoom,
  ContainerFormRoom,
  ContainerRegisterRoom,
  LocationRoom,
} from "../../styles/components/FormRoom";
import { StyledInput } from "../../styles/components/Input";

export const FormRoom = () => {
  return (
    <ContainerRegisterRoom>
      <h3>Disponibilize seu quarto</h3>
      <ContainerFormRoom>
        <label>
          Título*
          <input
            type="text"
            placeholder="Ex: Quarto com vista para mar no Flamengo"
          />
        </label>

        <label>
          Descrição*
          <textarea
            rows={7}
            placeholder="Descreava bem sua acomandação, quem você está procurando. Mão
              informe dados pessoais."
          ></textarea>
        </label>
        <ContainerAboutRoom>
          <h3>Sobre o quarto*</h3>
          <label>
            Academia
            <input type="checkbox" />
          </label>
          <label>
            Garagem
            <input type="checkbox" />
          </label>
          <label>
            Internet
            <input type="checkbox" />
          </label>
          <label>
            Aceita animais
            <input type="checkbox" />
          </label>
          <label>
            Tv
            <input type="checkbox" />
          </label>
          <label>
            Mobiliado
            <input type="checkbox" />
          </label>
        </ContainerAboutRoom>

        <LocationRoom>
          <h3>Localização do quarto*</h3>
          <StyledInput type="number" placeholder="CEP" />
          <StyledInput type="text" placeholder="Bairro" />
          <StyledInput type="text" placeholder="Localidade, UF" />
          <StyledInput type="text" placeholder="Rua" />
          <StyledInput type="number" placeholder="Numero" />
        </LocationRoom>
      </ContainerFormRoom>
    </ContainerRegisterRoom>
  );
};
//
