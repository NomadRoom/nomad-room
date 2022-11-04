import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: var(--sz-text-2);
  color: var(--color-white);
  padding: 14px 20px;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--bd-radius1);
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    filter: brightness(1.05);
  }
`;
