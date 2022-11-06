import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { cepRequest } from "../../services/cep";

export const FormRoom = () => {

  const [neighborhood, setNeighborhood] = useState('')
  const [cityState, setCityState] = useState('')
  const [street, setStreet] = useState('')
  
  interface iCep{
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string,
  }

  interface iData<i>{
    data: i
  }

  const getExtension = (name: any) => {
    let arr = name.split('.')
    return arr.pop()
  }

  const regex: RegExp = /^\[1-9]{2}9[1-9][0-9]{3}[0-9]{4}$/

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
    photo: yup.mixed()
    .test({
      message: 'Insira um arquivo suportavel',
      test: (file) => {
        const isValid = ['png', 'jpg'].includes(getExtension(file?.name));
        return isValid;
      }
    })
    .test({
      message: `arquivo muito grande, favor não ultrapassar 1024`,
      test: (file) => {
        const isValid = file?.size < 1024;
        return isValid;
      }
    }),
    contact: yup.string().required().matches(regex),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = () => {
  
  }

  const cepListener = async (event: any) => {
    if(event.target.value === 8){
      try{
        let response = await cepRequest.get<iCep>(`${event.target.value}/json`)
        setNeighborhood(response.data.bairro)
        setCityState(`${response.data.localidade}, ${response.data.uf}`)
        setStreet(response.data.logradouro)
      }
      catch(err){console.log(err)}
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <input type="text" {...register("title")} />
      <textarea cols={30} rows={10} {...register("description")}></textarea>
      <div>
        <input type="checkbox" {...register("gym")} />
        <input type="checkbox" {...register("internet")} />
        <input type="checkbox" {...register("tv")} />
        <input type="checkbox" {...register("garage")} />
        <input type="checkbox" {...register("pets")} />
        <input type="checkbox" {...register("furniture")} />
      </div>
      <input type="text" {...register("CEP")} onChange={cepListener} />
      <input type="text" value={neighborhood} {...register("neighborhood")} />
      <input type="text" value={cityState} {...register("cityState")} />
      <input type="text" value={street} {...register("street")} />
      <input type="text" {...register("number")} />
      <input type="file" {...register("photo")} />
      <input type="text" {...register("contact")} />
    </form>
  );
};