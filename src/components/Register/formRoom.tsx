import * as yup from "yup";
import {
  DeepMap,
  Message,
  MultipleFieldErrors,
  Ref,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { cepRequest } from "../../services/cep";
import { StyledInput } from "../../styles/components/Input";
import {
  ContainerAboutRoom,
  ContainerFormRoom,
  ContainerRegisterRoom,
  LocationRoom,
} from "../../styles/components/FormRoom";
import { api } from "../../services/api";
import { StyledButton } from "../../styles/components/Button";

interface iCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface iForm {
  title: string;
  description: string;
  gym: boolean;
  internet: boolean;
  tv: boolean;
  garage: boolean;
  pets: boolean;
  furniture: boolean;
  CEP: string;
  neighborhood: string;
  cityState: string;
  street: string;
  number: string;
  photo: string;
  contact: string;
}

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

export type FieldErrors<TFieldValues extends iForm = iForm> = DeepMap<
  TFieldValues,
  FieldError
>;

export const FormRoom = () => {
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [cityState, setCityState] = useState<string>("");
  const [street, setStreet] = useState<string>("");

  const regex: RegExp = /^\[1-9]{2}9[1-9][0-9]{3}[0-9]{4}$/;

  const schema = yup.object().shape({
    title: yup.string().required("Título é obrigatorio"),
    description: yup.string().required("Descrição é obrigatoria"),
    gym: yup.bool(),
    internet: yup.bool(),
    tv: yup.bool(),
    garage: yup.bool(),
    pets: yup.bool(),
    furniture: yup.bool(),
    CEP: yup
      .string()
      .required("CEP obrigatorio")
      .matches(/\d{8}/, "Cep invalido"),
    neighborhood: yup.string().required("Bairro obrigatorio"),
    cityState: yup.string().required("Localização obrigatoria"),
    street: yup.string().required("Logradouro obrigatorio"),
    number: yup.string().required("Numero obrigatorio"),
    photo: yup.string().required("Foto obrigatoria"),
    contact: yup
      .string()
      .required("Contato obrigatorio")
      .matches(regex, "Numero invalido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iForm>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data: iForm) => {
    try {
      await api.post("/register/room", {
        title: data.title,
        description: data.description,
        about: {
          gym: data.gym,
          garage: data.garage,
          internet: data.internet,
          animals: data.pets,
          tv: data.tv,
          furnished: data.furniture,
        },
        location: {
          postal_code: data.CEP,
          district: data.neighborhood,
          street: data.street,
          city: data.cityState,
          number: data.number,
        },
        room_img: data.photo,
        contact: data.contact,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const cepListener = async (event: any) => {
    if (event.target.value.length === 8) {
      console.log("batata")
      try {
        let response = await cepRequest.get<iCep>(`${event.target.value}/json`);
        console.log(response);
        setNeighborhood(response.data.bairro);
        setCityState(`${response.data.localidade}, ${response.data.uf}`);
        setStreet(response.data.logradouro);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <ContainerRegisterRoom>
      <h2>Disponibilize seu quarto</h2>
      <ContainerFormRoom onSubmit={handleSubmit(onSubmitForm)}>
        <label htmlFor="title">Titulo*</label>
        <StyledInput id="title" type="text" {...register("title")} />
        {errors.title?.message}
        <label htmlFor="description">Descrição*</label>
        <textarea
          cols={30}
          rows={10}
          id="description"
          {...register("description")}
        ></textarea>
        {errors.description?.message}
        <label htmlFor="about">Sobre o quarto</label>
        <ContainerAboutRoom id="about">
          <li>
            <input type="checkbox" {...register("gym")} />
            <label htmlFor="gym">Academia</label>
          </li>
          <li>
            <input type="checkbox" {...register("internet")} />
            <label htmlFor="internet">Internet</label>
          </li>
          <li>
            <input type="checkbox" {...register("tv")} />
            <label htmlFor="tv">Tv</label>
          </li>
          <li>
            <input type="checkbox" {...register("garage")} />
            <label htmlFor="garage">Garagem</label>
          </li>
          <li>
            <input type="checkbox" {...register("pets")} />
            <label htmlFor="pets">Aceita animais</label>
          </li>
          <li>
            <input type="checkbox" {...register("furniture")} />
            <label htmlFor="furniture">Mobiliado</label>
          </li>
        </ContainerAboutRoom>
        <label htmlFor="location">Localização do quarto*</label>
        <LocationRoom id="location">
          <StyledInput
            type="text"
            {...register("CEP")}
            onChange={cepListener}
            placeholder="CEP (somente numeros)"
          />
          {errors.CEP?.message}
          <StyledInput
            type="text"
            value={neighborhood}
            {...register("neighborhood")}
            placeholder="Bairro"
          />
          {errors.neighborhood?.message}
          <StyledInput
            type="text"
            value={cityState}
            {...register("cityState")}
            placeholder="Cidade e Estado"
          />
          {errors.cityState?.message}
          <StyledInput
            type="text"
            value={street}
            {...register("street")}
            placeholder="Logradouro"
          />
          {errors.street?.message}
          <StyledInput
            type="text"
            {...register("number")}
            placeholder="Numero"
          />
          {errors.number?.message}
        </LocationRoom>
        <StyledInput
          type="text"
          {...register("photo")}
          placeholder="Url da foto"
        />
        {errors.photo?.message}
        <StyledInput
          type="text"
          {...register("contact")}
          placeholder="Contato"
        />
        {errors.contact?.message}
        <StyledButton type="submit">Disponibilizar</StyledButton>
      </ContainerFormRoom>
      <p>Todas as informações com (*) são obrigatórias</p>
    </ContainerRegisterRoom>
  );
};
