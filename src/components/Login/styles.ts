import styled from "styled-components";

export const FormBox = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;

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
      ),
      url(sasha-kaunas-hEAGekaiJ8g-unsplash.jpg);
  }
`;

export const FormLogin = styled.form`
  position: absolute;
  width: 512px;
  height: 357px;
  left: 677px;
  top: 245px;
  background: var(--color-white);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);

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
    margin-right: 270px;
  }
`;
