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
 
  }
`;

export const Form = styled.form`
  position: absolute;
  width: 512px;
  height: 750px;
  left: 677px;
  top: 245px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  background: var(--color-white);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

 

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
  }
`;
