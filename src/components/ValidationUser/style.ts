import styled from "styled-components";

export const FormValidation = styled.form`
  width: 70%;
  margin: 0 auto;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  position: absolute;
  padding-bottom: 7rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  top: 60%;
  right: 14%;
  background-color: #fff;

  > button {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    > button {
      position: absolute;
      right: 40px;
      bottom: 30px;
      width: 15rem;
    }
  }
`;

export const DivIntro = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-gray1);
  }
  > p {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--color-gray1);
  }
`;

export const DivInputs = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  > div > input {
    width: 100%;
    height: 40px;
    background-color: var(--color-gray5);
    padding: 5px;
  }
  > div > textarea {
    width: 100%;
    padding: 1rem;
    background-color: var(--color-gray5);
  }
  > div > span {
    color: red;
  }
  @media (min-width: 1024px) {
    flex-direction: column;

    > div:nth-child(1) {
      width: 35%;
    }

    > div > input {
      height: 40px;
      width: 100%;
    }
  }
`;
