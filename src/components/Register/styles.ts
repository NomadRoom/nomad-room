import styled from "styled-components";

export const FormBox = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;

  img {
    position: absolute;
    width: 100vw;
    height: 275px;
    left: 0px;
    top: 80px;
    background: linear-gradient(
      0deg,
      rgba(35, 35, 35, 0.65),
      rgba(35, 35, 35, 0.65)
    );
    @media (max-width: 480px) {
      position: absolute;
     
      height: 180px;
      left: 0px;
      top: 79px;
    }
  }
`;

export const Form = styled.form`
  position: absolute;
  width: 512px;
  height: 770px;
  left: 687px;
  top: 245px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  background: var(--color-white);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  @media (max-width: 480px) {
    position: absolute;
    width: 358px;
    left: 28px;
    top: 120px;
  }

  p {
    height: 12px;
  }
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-gray1);
    margin-right: 240px;
    @media (max-width: 480px) {
      width: 196.73px;
      height: 51.82px;

      margin-right: 110px;
    }
  }
`;
