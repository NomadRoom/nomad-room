import styled from "styled-components";

export const ContainerRegisterRoom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  width: 90%;
  margin: 0 auto;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;

    @media (min-width: 740px) {
      font-size: 1.7rem;
    }
  }
  @media (min-width: 1300px) {
    width: 1200px;
  }
`;

export const ContainerFormRoom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 45px 16px;
  width: 100%;
  border: 1px solid var(--color-gray4);
  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 45px 40px;
  }

  label {
    font-size: 1.125rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    input {
      width: 100%;
      padding: 13px 30px;
      background-color: var(--color-gray5);
      border-radius: 10px;
      outline: none;
    }
  }

  textarea {
    resize: none;
    outline: none;
    width: 100%;
    padding: 13px 30px;
    background-color: var(--color-gray5);
    border-radius: 10px;
  }
`;

export const ContainerAboutRoom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 22px;
  width: 253px;
  flex-wrap: wrap;
  position: relative;

  h3 {
    font-size: 1.125rem;
    text-align: start;
  }

  label {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 5px;
    font-size: 1rem;
    font-weight: 400;

    input {
      width: 20px;
      height: 14px;
      cursor: pointer;
    }

    input:checked {
      /* width: 30px;
      height: 30px;
      background-color: red; */
    }
  }

  label:nth-child(3) {
    margin-right: 36px;
  }
  label:nth-child(7) {
    margin-right: 36px;
  }
`;

export const LocationRoom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 253px;

  h3 {
    font-size: 1.125rem;
    text-align: start;
  }
`;
