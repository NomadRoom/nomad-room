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
import { api } from "../../services/api";

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
    title: yup.string().required(),
    description: yup.string().required(),
    gym: yup.bool(),
    internet: yup.bool(),
    tv: yup.bool(),
    garage: yup.bool(),
    pets: yup.bool(),
    furniture: yup.bool(),
    CEP: yup.string().required().matches(/\d{8}/),
    neighborhood: yup.string().required(),
    cityState: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    photo: yup.string().required(),
    contact: yup.string().required().matches(regex),
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
    if (event.target.value === 8) {
      try {
        let response = await cepRequest.get<iCep>(`${event.target.value}/json`);
        setNeighborhood(response.data.bairro);
        setCityState(`${response.data.localidade}, ${response.data.uf}`);
        setStreet(response.data.logradouro);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <StyledInput type="text" {...register("title")} />
      <textarea cols={30} rows={10} {...register("description")}></textarea>
      <div>
        <input type="checkbox" {...register("gym")} />
        <input type="checkbox" {...register("internet")} />
        <input type="checkbox" {...register("tv")} />
        <input type="checkbox" {...register("garage")} />
        <input type="checkbox" {...register("pets")} />
        <input type="checkbox" {...register("furniture")} />
      </div>
      <StyledInput type="text" {...register("CEP")} onChange={cepListener} />
      <StyledInput
        type="text"
        value={neighborhood}
        {...register("neighborhood")}
      />
      <StyledInput type="text" value={cityState} {...register("cityState")} />
      <StyledInput type="text" value={street} {...register("street")} />
      <StyledInput type="text" {...register("number")} />
      <StyledInput type="text" {...register("photo")} />
      <StyledInput type="text" {...register("contact")} />
      <button type="submit"></button>
    </form>
  );
};
