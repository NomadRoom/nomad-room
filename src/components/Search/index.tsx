import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { apiEstados } from "../../services/city";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledBannerSearch,
  StyledContainerSearch,
  StyledFormSearch,
  StyledSearchApi,
} from "../../styles/components/Search";

interface iCity {
  city: string;
}

interface iCityResponseApi {
  sigla: string;
  nome: string;
}

export const SearchDashboard = () => {
  const [cityResults, setCityResults] = useState([]);

  const validationSchema = yup.object().shape({
    city: yup.string().required("Digite a localidade"),
  });

  const { register, handleSubmit } = useForm<iCity>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (cityInput: iCity) => {
    console.log(cityInput.city);
    //Chamar os quartos por aqui
  };

  const onChange = async (e: any) => {
    const response = await apiEstados.get("/estados");
    const cityInput = e.target.value;
    const length = cityInput.split("").length;

    try {
      const { data } = response;
      const cityFilter = data.filter(
        (city: iCityResponseApi) =>
          city.sigla.toLowerCase().includes(cityInput.toLowerCase()) ||
          city.nome.toLowerCase().includes(cityInput.toLowerCase())
      );
      setCityResults(cityFilter);
      length === 0 && setCityResults([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledBannerSearch>
      <StyledContainerSearch>
        <h2>Pesquisar quartos</h2>

        <StyledFormSearch onSubmit={handleSubmit(onSubmit)}>
          <FaSearch className="search" />
          <input
            type="text"
            autoComplete="off"
            placeholder="Para onde você quer ir?"
            {...register("city")}
            onChange={onChange}
          />
          <button type="submit">
            <span>Quartos</span>
            <MdOutlineKingBed />
          </button>
        </StyledFormSearch>
        <StyledSearchApi>
          {cityResults.length > 0 &&
            cityResults.map((citys: iCityResponseApi) => (
              <li
                key={citys.sigla}
                onClick={() => {
                  console.log(citys.nome);
                  setCityResults([]);
                  //Chamar os quartos por aqui
                }}
              >
                {citys.nome}
              </li>
            ))}
        </StyledSearchApi>
      </StyledContainerSearch>
    </StyledBannerSearch>
  );
};

//<Header />
//<SearchDashboard /> */
