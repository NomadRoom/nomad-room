import styled from "styled-components";
import banner from "../../assets/img/banner.png";

export const StyledBannerSearch = styled.div`
  width: 100vw;
  height: 370px;
  background-size: contain;
  background: url(${banner});
  /* background-repeat: no-repeat; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerSearch = styled.div`
  width: 90%;
  display: flex;
  gap: 26px;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--color-white);
    font-size: 2rem;
  }
`;

export const StyledInputSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--color-white);
  width: 100%;
  height: 56px;
  border-radius: 10px;
  padding: 16px;
  position: relative;

  @media (min-width: 768px) {
    height: 70px;
    width: 700px;
  }

  .search {
    color: var(--color-gray2);
    width: 25px;
    height: 24.22px;
  }

  input {
    width: 65%;
    outline: none;
  }

  button {
    position: absolute;
    right: 16px;
    background-color: var(--color-primary);
    padding: 11px 16px;
    border-radius: 10px;

    span {
      display: none;
    }

    svg {
      color: var(--color-white);
      width: 20px;
      height: 14px;
    }

    @media (min-width: 768px) {
      svg {
        display: none;
      }

      span {
        display: flex;
        color: var(--color-white);
        font-weight: 700;
      }
    }
  }
`;
