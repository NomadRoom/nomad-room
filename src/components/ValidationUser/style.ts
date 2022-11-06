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
  align-items: center;

  > label {
    background-color: var(--color-gray5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100px;
    cursor: pointer;
    transition: 0.7s;
  }
  > label:hover {
    transform: scale(1.05);
  }

  > input {
    display: none;
    background-color: var(--color-gray5);
  }
  > textarea {
    width: 100%;
    padding: 1rem;
    background-color: var(--color-gray5);
  }
  @media (min-width: 1024px) {
    flex-direction: row;

    > label {
      height: 152px;
      width: 25%;
    }
  }
`;
