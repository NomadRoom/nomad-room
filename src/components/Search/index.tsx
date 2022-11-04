import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { apiEstados } from "../../services/city";
import {
  StyledBannerSearch,
  StyledContainerSearch,
  StyledInputSearch,
} from "../../styles/components/Search";

export const SearchDashboard = () => {
  useEffect(() => {
    const district = async () => {
      const response = await apiEstados.get("/distritos");
      try {
        const { data } = response;
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    district();
  }, []);

  return (
    <StyledBannerSearch>
      <StyledContainerSearch>
        <h2>Pesquisar quartos</h2>

        <StyledInputSearch>
          <FaSearch className="search" />
          <input type="text" placeholder="Para onde você quer ir?" />
          <button>
            <span>Quartos</span>
            <MdOutlineKingBed />
          </button>
        </StyledInputSearch>
      </StyledContainerSearch>
    </StyledBannerSearch>
  );
};

//<Header />
//<SearchDashboard /> */
