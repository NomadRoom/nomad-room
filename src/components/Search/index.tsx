import { FaSearch } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import {
  StyledBannerSearch,
  StyledContainerSearch,
  StyledInputSearch,
} from "../../styles/components/Search";

export const SearchDashboard = () => {
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
